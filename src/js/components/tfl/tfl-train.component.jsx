import React from "react";
import _map from "lodash/map";
import LoaderTabs from "../loader/loader-tabs.component";
import Error from "../error.component";
import { connect } from "react-redux";
import { getMockData } from "../../mocks/tfl-train.mocks";
import { FETCH_CONTENT } from "../../actions/types";
import TflTrainDisruption from "./tfl-traindisruption";
import AbstractWidget from '../abstract-widget.component';

class TflTrain extends AbstractWidget {
  constructor(props) {
    super(props);
    let url = this.getUrl();
    this.PROPERTIES = {
      feedUrl: url,
      needsJsonParse: true
    };
    this.state = {
      contentReady: false,
      trainData: {},
      error: false,
      showInfo: true
    };
  }

  getUrl() {
    const today = new Date(); 
    if (today.getHours() > 10 && today.getHours() < 23) {
      // From Shenfield to Stratford
      return "https://api.tfl.gov.uk/journey/journeyresults/1006448/to/1000226?app_id=7a545d8e&app_key=a126ea9826d6227c33bebc86df0fd87f";
    }
    else{
      // From Stratford to Shenfield ok
      return "https://api.tfl.gov.uk/journey/journeyresults/1000226/to/1006448?app_id=7a545d8e&app_key=a126ea9826d6227c33bebc86df0fd87f";
    }
  }

  // Overrides
  processData(feedData) {
    const journey = feedData.journeys[0];
    const self = this;
    try {
      self.setState(state => {
        state.trainData.fare =
          "£" +
          (journey.fare !== undefined ? journey.fare.totalCost / 100 : "??");
        state.trainData.duration = journey.duration + "min";
        state.trainData.from = journey.legs[0].departurePoint.commonName;
        state.trainData.to = journey.legs[0].arrivalPoint.commonName;
        state.trainData.isDisrupted = journey.legs[0].isDisrupted;
        state.trainData.disruptions = journey.legs[0].disruptions;
        state.contentReady = true;
        return state;
      });
    } catch (exception) {
      self.setState(state => {
        state.contentReady = true;
        state.error = true;
        return state;
      });
    }
  };

  componentDidMount() {
    if (this.props.mocksEnabled) {
      this.processData(getMockData());
    } else {
      const today = new Date();
      if (today.getDay() < 6) {
        // E.g. all workdays Mon to Fri
        chrome.runtime.sendMessage(
          { contentScriptQuery: FETCH_CONTENT, properties: this.PROPERTIES},
          feedData => this.processData(feedData));
      } else {
        const self = this;
        self.setState(state => {
          state.contentReady = true;
          state.showInfo = false;
          return state;
        });
      }
    }
  }

  displayDisruptions() {
    if (this.state.trainData.isDisrupted) {
      return (
        <div className="train-disruptions">
          <div className="title">
            <img
              className="logo"
              src={chrome.runtime.getURL("../../../assets/alert.png")}
            />
            <div className="text">Disruptions</div>
          </div>
          {_map(this.state.trainData.disruptions, (element, index) => (
            <TflTrainDisruption key={index} data={element} />
          ))}
        </div>
      );
    }
  }

  render() {
    if (!this.state.contentReady) {
      return <LoaderTabs />;
    } else if (this.state.error) {
      return <Error />;
    } else if (this.state.showInfo) {
      return (
        <div className="tfl-train-container">
          <div className="header">
            <img
              className="logo"
              src={chrome.runtime.getURL("../assets/national-rail.png")}
            />
            <div className="title">National Rail</div>
          </div>
          <div className="info-container">
            <div className="from-station">
              <img
                className="logo"
                src={chrome.runtime.getURL("../assets/train-from.png")}
              />
              <div className="station-name">{this.state.trainData.from}</div>
            </div>
            <div className="to-station">
              <img
                className="logo"
                src={chrome.runtime.getURL("../assets/train-to.png")}
              />
              <div className="station-name">{this.state.trainData.to}</div>
            </div>
            <div className="fare">
              Fare: <span className="amount">{this.state.trainData.fare}</span>
            </div>
            <div className="duration">
              Duration:{" "}
              <span className="time">{this.state.trainData.duration}</span>
            </div>
          </div>

          {this.displayDisruptions()}
        </div>
      );
    } else {
      return null;
    }
  }
}
function mapStateToProps(state) {
  return {
    mocksEnabled: state.configuration.mocksEnabled
  };
}

export default connect(mapStateToProps)(TflTrain);
