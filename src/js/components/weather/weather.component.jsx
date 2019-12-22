import React, { Component } from "react";
import _map from "lodash/map";
import _isEmpty from "lodash/isEmpty";
import Loader from "../loader/loader.component";
import WeatherNextDays from "./weather-next-days.component";
import WeatherToday from "./weather-today.component";
import { connect } from "react-redux";
import { getMockData } from "../../mocks/weather.mocks";
import { FETCH_CONTENT } from "../../actions/types";

export class WeatherWidget extends Component {
  constructor(props) {
    super(props);
    this.PROPERTIES = {
      feedUrl: "https://api.darksky.net/forecast/e9231a0d68ba35226274ad3b5e1f6dc4/51.5177896,0.1085338000000000?units=ca",
      needsJsonParse: true
  }
    this.state = {
      data: {},
      contentReady: false,
      error: false,
      nextDaysVisible: false,
      todayVisible: false
    };

    this.toggleNextDays = this.toggleNextDays.bind(this);
    this.toggleTodayForecast = this.toggleTodayForecast.bind(this);
  }

  processData(feedData) {
    const self = this;
    self.setState(state => {
      if (_isEmpty(feedData)) {
        state.error = true;
      }
      state.data = feedData;
      state.contentReady = true;
      return state;
    });
  };

  componentDidMount() {
    if (this.props.mocksEnabled) {
      const data = getMockData();
      this.processData(data);
    } else {
      chrome.runtime.sendMessage(
        { contentScriptQuery: FETCH_CONTENT, properties: this.PROPERTIES},
        feedData => this.processData(feedData));
    }
  }

  toggleNextDays(e) {
    e.preventDefault();
    this.setState(state => {
      state.nextDaysVisible = !state.nextDaysVisible;
      state.todayVisible = false;
      return state;
    });
  }

  toggleTodayForecast(e) {
    e.preventDefault();
    this.setState(state => {
      state.todayVisible = !state.todayVisible;
      state.nextDaysVisible = false;
      return state;
    });
  }

  render() {
    if (!this.state.contentReady) {
      return <Loader />;
    } else {
      const weather = this.state.data;
      const imageStyle = {
        background:
          "url(" + chrome.runtime.getURL("../assets/weather.png") + ") 0 0",
        height: "56px",
        width: "56px"
      };
      return (
        <React.Fragment>
          <div className="current">
            <a
              href="https://www.google.com/search?q=london+forecast"
              target="_blank" rel="noopener noreferrer"
            >
              <div
                style={imageStyle}
                className={"weather-icon " + weather.currently.icon}
              />
            </a>
            <div className="today-summary" onClick={this.toggleTodayForecast}>
              <div className="summary">
                <div className="real">
                  {parseInt(weather.currently.temperature)}{" "}
                  <span className="celsius">°C</span>
                </div>
                <div className="apparent">
                  Feel{" "}
                  <b>
                    {Math.round(weather.currently.apparentTemperature * 10) /
                      10}
                  </b>{" "}
                  <span className="celsius">°C</span>
                </div>
              </div>
              <div className="wind-current">
                <img
                  src={chrome.runtime.getURL("../assets/wind-arrow.png")}
                  style={{
                    transform: `rotate(${weather.currently.windBearing}deg)`
                  }}
                />
                <div className="label">
                  {Math.round(weather.currently.windSpeed)} km/h
                </div>
              </div>
            </div>
            <button className="daysWeekButton" onClick={this.toggleNextDays}>
              <img
                src={chrome.runtime.getURL("../assets/weather-calendar.png")}
              />
            </button>
          </div>
          <div
            className="next-days"
            style={{
              visibility: `${this.state.nextDaysVisible ? "visible" : "hidden"}`
            }}
          >
            <WeatherNextDays dailyData={weather.daily} />
          </div>
          <div
            className="today-weather"
            style={{
              visibility: `${this.state.todayVisible ? "visible" : "hidden"}`
            }}
          >
            <WeatherToday
              todayData={weather.hourly}
              visibility={this.state.todayVisible}
            />
          </div>
        </React.Fragment>
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    mocksEnabled: state.configuration.mocksEnabled
  };
}

export default connect(mapStateToProps)(WeatherWidget);
