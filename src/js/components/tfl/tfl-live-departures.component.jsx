import React from 'react';
import PropTypes from 'prop-types';
import AbstractWidget from '../abstract-widget.component';
import { getMockData } from '../../mocks/tfl-live-departures.mocks';
import { connect } from 'react-redux';
import _map from 'lodash/map';
import _orderBy from 'lodash/orderBy';
import { FETCH_CONTENT } from '../../actions/types';

class TflLiveDepartures extends AbstractWidget {
    constructor (props) {
        super(props);
        this.PROPERTIES = {
            feedUrl: "https://api.tfl.gov.uk/StopPoint/910GHGHI/Arrivals?mode=tube",
            needsJsonParse: true
        };
        this.state = {
            liveDeparturesData: {}
        };
    }

    getStratfordResults(feedDataItem) {
        return (feedDataItem.destinationName.indexOf("Stratford (London) Rail Station") != -1);
    }

    processData(feedData) {
        const self = this;
        try {
            self.setState(state => {
                const filteredResults = feedData.filter(this.getStratfordResults);
                const orderedResults = _orderBy(filteredResults, ['timeToStation'],['asc']);
                state.liveDeparturesData = orderedResults;
                return state;
            });
        }
        catch(exception) {
            loading(false);
            console.error('*** EXCEPTION (I could not process all data) -> ', exception);
        }
    }

    componentDidMount() {
        if (this.props.mocksEnabled) {
            this.processData(getMockData());
        }
        else {
            chrome.runtime.sendMessage(
                { contentScriptQuery: FETCH_CONTENT, properties: this.PROPERTIES},
                feedData => this.processData(feedData));
        }
    }

    render() {
        return (
            <div className="tfl-live-departures-container">
                <div className="header">Highbury & Islington</div>
                <div className="table">
                    {_map(this.state.liveDeparturesData, (status, i) => {
                        const timeToStation = Math.round(status.timeToStation/60);
                        return (
                            <div className="new-arrival" key={i}>
                                <div className="arrival-destination">Stratford</div>
                                <div className="arrival-time">{timeToStation > 0 ? `${timeToStation} min`: 'Due'}</div>
                                <div className="arrival-status">On time</div>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }    
}

TflLiveDepartures.propTypes = {
    mocksEnabled: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
	return {
		mocksEnabled: state.configuration.mocksEnabled
	};
}

export default connect(mapStateToProps)(TflLiveDepartures);