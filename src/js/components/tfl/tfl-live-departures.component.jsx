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
            feedUrl: "https://api.tfl.gov.uk/StopPoint/910GHGHI/ArrivalDepartures?lineIds=london-overground&app_id=7a545d8e&app_key=a126ea9826d6227c33bebc86df0fd87f",
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
                for (let i = 0; i < filteredResults.length; i++) {
                    const timeInMillis = new Date(filteredResults[i].estimatedTimeOfArrival).getTime();
                    filteredResults[i].millis = timeInMillis;
                }
                const orderedResults = _orderBy(filteredResults, ['millis'],['asc']);
                state.liveDeparturesData = orderedResults;
                return state;
            });
        }
        catch(exception) {
            super.loading(false);
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

    getFormattedTime(string) {
        const timeString = string.split('T')[1]; 
        const timeStringSplitted = timeString.split(':'); 
        return timeStringSplitted[0] + ':' + timeStringSplitted[1]; 
    }

    getFormattedArrivalTime(timeString) {
        if (timeString.length > 1) {
            let splitted = timeString.split(':'); 
            const minToSec = parseInt(splitted[0])*60;
            const totalSeconds = minToSec + parseInt(splitted[1]);
            let date = new Date(null);
            date.setSeconds(totalSeconds);
            let toFormatTime = date.toISOString().substr(11, 8);
            splitted = toFormatTime.split(':');
            if (splitted[0] != "00") {
                return splitted[0] + "h" + splitted[1] + "m";
            }
            else {
                return splitted[1] + "m";
            }
        }
        else {
            return "🤷🏻‍♂️";
        }
    }

    render() {
        return (
            <div className="tfl-live-departures-container">
                <div className="header">Highbury & Islington</div>
                <div className="table">
                    {_map(this.state.liveDeparturesData, (status, i) => {
                        const scheduledTimeOfArrival = this.getFormattedTime(status.scheduledTimeOfArrival);
                        const timeToStation = this.getFormattedArrivalTime(status.minutesAndSecondsToArrival);
                        return (
                            <div className="new-arrival" key={i}>
                                <div className="arrival-destination">Stratford</div>
                                <div className="arrival-time">{scheduledTimeOfArrival} <span className="expected-arrival-time">({timeToStation})</span></div>
                                <div className={status.departureStatus}>{status.departureStatus}</div>
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