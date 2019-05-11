import React, { Component } from 'react';
import axios from 'axios';
import * as CONSTANTS from '../../constants';
import _map from 'lodash/map';
import Loader from '../loader/loader.component';
import WeatherNextDays from './weather-next-days.component';
import WeatherToday from './weather-today.component';
import { connect } from 'react-redux';
import { getMockData } from '../../mocks/weather.mocks';

export class WeatherWidget extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contentReady: false
        };

        this.nextDaysVisible = false;
        this.todayVisible = false;

        this.toggleNextDays = this.toggleNextDays.bind(this);
        this.toggleTodayForecast = this.toggleTodayForecast.bind(this);
    }

    componentDidMount() {
        if (this.props.mocksEnabled) {
            const data = getMockData();
            this.setState(state => {
                state.data = data;
                state.contentReady = true;
                state.nextDaysVisible = false;
                state.todayVisible = false;
                return state;
            });
        }
        else {
            this.weatherRequest();
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


    weatherRequest() {
        const self = this;
        axios.get(CONSTANTS.WEATHER_FEED).then(function(response) {
                let data = response.data;
                const json = data.replace(/^[^(]*\(([\S\s]+)\);?$/, '$1');
                data = JSON.parse(json);
                self.setState(state => {
                    state.data = data;
                    state.contentReady = true;
                    return state;
                });
            })
            .catch((error) => {
                console.log('Error fetching Weather data', error);
            });
    };

    

    render() {
        if (!this.state.contentReady) {
            return (
                <Loader/>
            );
        }
        else {
            const weather = this.state.data;
            const imageStyle = {
                background: 'url(' + chrome.runtime.getURL('../assets/weather.png') +') 0 0',
                height: '56px',
                width: '56px'
            }
            return(
                <React.Fragment>
                    <div className="current">
                        <a href="https://www.google.com/search?q=london+forecast" target="_blank">
                            <div style={imageStyle} className={'weather-icon ' + weather.currently.icon}></div>
                        </a>
                        <div className="today-summary" onClick={this.toggleTodayForecast}>
                            <div className="summary">
                                <div className="real">
                                    {parseInt(weather.currently.temperature) } <span className="celsius">°C</span>
                                </div>
                                <div className="apparent">
                                    Feel <b>{Math.round(weather.currently.apparentTemperature*10)/10}</b> <span className="celsius">°C</span>
                                </div>
                            </div>
                            <div className="wind-current">
                                <img 
                                    src={chrome.runtime.getURL('../assets/wind-arrow.png')}
                                    style={{transform: `rotate(${weather.currently.windBearing}deg)`}}/>
                                <div className="label">
                                    {Math.round(weather.currently.windSpeed)} km/h
                                </div>
                            </div>
                        </div>
                        <button 
                            className="daysWeekButton"
                            onClick={this.toggleNextDays}>
                            <img src={chrome.runtime.getURL('../assets/weather-calendar.png')}/>
                        </button>
                    </div>
                    <div className="next-days" style={{visibility: `${this.state.nextDaysVisible ? 'visible': 'hidden'}`}}>
                        <WeatherNextDays
                            dailyData={weather.daily}    
                        />
                    </div>
                    <div className="today-weather" style={{visibility: `${this.state.todayVisible ? 'visible': 'hidden'}`}}>
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