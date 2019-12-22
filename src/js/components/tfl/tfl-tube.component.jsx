import React from 'react';
import TflStatus from './tfl-status.component';
import _map from 'lodash/map';
import LoaderTabs from '../loader/loader-tabs.component';
import Error from '../error.component';
import { connect } from 'react-redux';
import { getMockData } from '../../mocks/tfl-tube.mocks';
import { FETCH_CONTENT } from '../../actions/types';
import AbstractWidget from '../abstract-widget.component';


class TflTube extends AbstractWidget {
    constructor (props) {
        super(props);
        this.PROPERTIES = {
            feedUrl: "https://api.tfl.gov.uk/line/mode/overground/status",
            needsJsonParse: true
        };
        this.state = {
            loading: false,
            tubeData: {},
            error: true
        };
    }

    // Overrides 
    processData(feedData) {
        const self = this;
        try {
            self.setState(state => {
                state.tubeData = feedData[0];
                state.error = false;
                state.loading = true;
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
        const {lineStatuses} = this.state.tubeData;
        let showIcon = true;
        if (lineStatuses !== undefined) {
            if (lineStatuses.length === 1 && 
                lineStatuses[0].statusSeverityDescription === "Good Service") {
                    showIcon = false;
            }
        }
        const statusClass = (showIcon) ? "multiple-status" : "status";
        if (!this.state.loading) {
            return (
                <LoaderTabs/>
            );
        }
        else if (this.state.error) {
            return (
                <Error/>
            );
        }
        else {
            return (
                    <div className="tfl-tube-container">
                    <div className="name">
                        {this.state.tubeData.name}
                    </div>
                    <div className={statusClass}>
                        {_map(lineStatuses, (status, i) => (
                            <TflStatus
                                key={i}
                                status={status}
                                showicon={showIcon}
                            />
                        ))}
                    </div>
                </div>
            );
        }
    }    
}
function mapStateToProps(state) {
	return {
		mocksEnabled: state.configuration.mocksEnabled
	};
}

export default connect(mapStateToProps)(TflTube);
