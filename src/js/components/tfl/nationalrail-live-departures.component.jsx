import PropTypes, { number } from 'prop-types';
import AbstractWidget from '../abstract-widget.component';
import { getMockData } from '../../mocks/nationalrail-live-departures.mocks';
import { connect } from 'react-redux';
import _map from 'lodash/map';
import _orderBy from 'lodash/orderBy';
import { FETCH_CONTENT } from '../../actions/types';
import _isEmpty from 'lodash/isEmpty';
import Popup from './tfl-train-disruption-popup';

class NationalRailLiveDepartures extends AbstractWidget {
    constructor (props) {
        super(props);
        const url = this.getUrl();
        this.PROPERTIES = {
          feedUrl: url,
          needsJsonParse: true
        };
        this.popupClicked;
        this.state = {
            liveDeparturesData: {},
            showPopup: false,
            disruptions: {}
        };
        this.togglePopup = this.togglePopup.bind(this);
        this.closePopup = this.closePopup.bind(this);
    }

    closePopup() {
        this.setState({
            showPopup: false
        });
        this.popupClicked = -1;
    }

    togglePopup(disruptions, indexClicked) {
        let showPopup = false;
        if (indexClicked != this.popupClicked) {
            showPopup = true;
            this.popupClicked = indexClicked;
        } 
        else {
            this.popupClicked = -1;
        }
        
        this.setState({
            showPopup: showPopup,
            disruptions: disruptions
        });
    }

    getFormattedDateURL(today) {
        const yyyy = today.getFullYear();
        let mm = today.getMonth() + 1;
        mm = (mm<10 ? '0' + mm : mm.toString());
        let dd = today.getDate();
        dd = (dd<10 ? '0' + dd : dd.toString());
        return yyyy + mm + dd;
    }

    getFormattedTimeURL(today) {
        let hh = today.getHours();
        hh = (hh<10 ? '0' + hh : hh.toString());
        let mm = today.getMinutes();
        mm = (mm<10 ? '0' + mm : mm.toString());
        return hh + mm;
    }

    travelingHome(today) {
        return today.getHours() > 10 && today.getHours() < 23;
    }
 
    getUrl() {
        const today = new Date(); 
        const formattedDate = this.getFormattedDateURL(today);
        const formattedTime = this.getFormattedTimeURL(today);
        if (this.travelingHome(today)) {
          // From Shenfield to Stratford
        return `https://api.tfl.gov.uk/journey/journeyresults/1006448/to/1000226?time=${formattedTime}&date=${formattedDate}&timeIs=departing&app_id=7a545d8e&app_key=a126ea9826d6227c33bebc86df0fd87f`;
        }
        else{
          // From Stratford to Shenfield ok
          return `https://api.tfl.gov.uk/journey/journeyresults/1000226/to/1006448?time=0845&date=${formattedDate}&timeIs=departing&app_id=7a545d8e&app_key=a126ea9826d6227c33bebc86df0fd87f`;
        }
      }

    processData(feedData) {
        const self = this;
        try {
            self.setState(state => {
                state.liveDeparturesData = feedData.journeys;
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
        let header;
        if (!_isEmpty(this.state.liveDeparturesData)) {
            header = this.state.liveDeparturesData[0].legs[0].departurePoint.commonName;
        }
        const arrivalDestination = (this.travelingHome(new Date()) ? "Stratford" : "Shenfield");
        return (
            <div className="train-live-departures-container">
                <div className="header">{header}</div>
                <div className="table">
                    {_map(this.state.liveDeparturesData, (status, i) => {
                        const iballStyle = {
                            display: (status.legs[0].isDisrupted ? "inline-block" : "none")
                          };
                        const startDateTime = this.getFormattedTime(status.startDateTime);
                        return (
                            <div className="new-arrival" key={i}>
                                <div className="arrival-destination">{arrivalDestination}</div>
                                <div className="arrival-time">{startDateTime}</div>
                                <div className={`is-disrupted-${status.legs[0].isDisrupted}`}>
                                    {status.legs[0].isDisrupted ? "Disrupted" : "Good Service"}
                                        <span className="iball" style={iballStyle}>
                                            <img
                                                onClick={() => this.togglePopup(status.legs[0].disruptions, i)}
                                                src={chrome.runtime.getURL('../../assets/iball.png')}/>
                                        </span>
                                </div>
                            </div>
                        );
                    })}
                </div>
                {this.state.showPopup ?
                    <Popup
                        disruptions={this.state.disruptions}
                        closePopup={this.closePopup}
                    />
                    : null
                }
            </div>
        );
    }    
}

NationalRailLiveDepartures.propTypes = {
    mocksEnabled: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
	return {
		mocksEnabled: state.configuration.mocksEnabled
	};
}

export default connect(mapStateToProps)(NationalRailLiveDepartures);