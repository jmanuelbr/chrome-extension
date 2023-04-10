import {Component, Fragment} from "react";
import Loader from "../loader/loader.component";
import WeatherNextDays from "./weather-next-days.component";
import WeatherToday from "./weather-today.component";
import { connect } from "react-redux";
let getMockData;
if (process.env.NODE_ENV === 'development') {
    getMockData = require('../../mocks/weather.openweather.mocks').getMockData;
}
import { FETCH_CONTENT } from "../../actions/types";
import PropTypes from 'prop-types';
import {isEmpty} from "../../helper";

export class WeatherWidget extends Component {
  constructor(props) {
    super(props);
    const {darkSkyApiToken, darskSkyLatitude, darskSkyLongitude} = props.chromeStorage;
    this.PROPERTIES = {
      feedUrl: `https://api.openweathermap.org/data/2.5/onecall?lat=37.9922&lon=-1.1307&appid=593821ba8734b2cc1c27a611d246951b&units=metric&exclude=minutely`,
      needsJsonParse: true
    };
    this.state = {
      data: {},
      loading: false,
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
      if (isEmpty(feedData)) {
        state.error = true;
      }
      state.data = feedData;
      state.loading = true;
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
    if (!this.state.loading) {
      return <Loader />;
    } else {
      const weather = this.state.data;
      return (
          <Fragment>
              <div className="current">
                  <a
                    href="https://www.google.com/search?q=murcia+forecast"
                    target="_blank" rel="noopener noreferrer">
                      <img
                        src={chrome.runtime.getURL("../assets/weather-icons/" + weather.current.weather[0].icon + ".png")}
                        width="59px"
                        height="59px"/>
                  </a>
                  <div className="today-summary" onClick={this.toggleTodayForecast}>
                      <div className="summary">
                          <div className="real">
                              {parseInt(weather.current.temp)}
                              <span className="celsius">°C</span>
                          </div>
                          <div className="apparent">
                              Feel{" "}
                              <b>
                                  {Math.round(weather.current.feels_like * 10) /
                      10}
                              </b>{" "}
                              <span className="celsius">°C</span>
                          </div>
                      </div>
                      <div className="wind-current">
                          <img
                      src={chrome.runtime.getURL("../assets/wind-arrow.png")}
                      style={{
                        transform: `rotate(${weather.current.wind_deg}deg)`
                      }}
                  />
                          <div className="label">
                              {Math.round(weather.current.wind_speed)} km/h
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
          </Fragment>
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    mocksEnabled: state.configuration.mocksEnabled
  };
}

WeatherWidget.propTypes = {
  chromeStorage: PropTypes.object,
  mocksEnabled: PropTypes.bool.isRequired
};

export default connect(mapStateToProps)(WeatherWidget);
