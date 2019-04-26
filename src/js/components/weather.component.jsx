import React, { Component } from 'react';
import axios from 'axios';
import * as CONSTANTS from '../constants';
import _map from 'lodash/map';
import Loader from './loader.component';

export default class WeatherWidget extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contentReady: false,
            mocks: false
        };
    }

    componentDidMount() {
        if (this.state.mocks) {
            this.setMockData();
        }
        else {
            this.weatherRequest();
        }   
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

    setMockData() {

        const jsonMockData = `
        {
            "latitude": 51.5177896,
            "longitude": 0.1085338,
            "timezone": "Europe/London",
            "currently":
            {
                "time": 1546289148,
                "summary": "Mostly Cloudy",
                "icon": "partly-cloudy-night",
                "nearestStormDistance": 566,
                "nearestStormBearing": 331,
                "precipIntensity": 0,
                "precipProbability": 0,
                "temperature": 8.67,
                "apparentTemperature": 5.95,
                "dewPoint": 4.88,
                "humidity": 0.77,
                "pressure": 1035.06,
                "windSpeed": 11.05,
                "windGust": 14.99,
                "windBearing": 251,
                "cloudCover": 0.93,
                "uvIndex": 0,
                "visibility": 11.68,
                "ozone": 268.31
            },
            "minutely":
            {
                "summary": "Mostly cloudy for the hour.",
                "icon": "partly-cloudy-night",
                "data": [
                {
                    "time": 1546289100,
                    "precipIntensity": 0,
                    "precipProbability": 0
                },
                {
                    "time": 1546289160,
                    "precipIntensity": 0,
                    "precipProbability": 0
                },
                {
                    "time": 1546289220,
                    "precipIntensity": 0,
                    "precipProbability": 0
                },
                {
                    "time": 1546289280,
                    "precipIntensity": 0,
                    "precipProbability": 0
                },
                {
                    "time": 1546289340,
                    "precipIntensity": 0,
                    "precipProbability": 0
                },
                {
                    "time": 1546289400,
                    "precipIntensity": 0,
                    "precipProbability": 0
                },
                {
                    "time": 1546289460,
                    "precipIntensity": 0,
                    "precipProbability": 0
                },
                {
                    "time": 1546289520,
                    "precipIntensity": 0,
                    "precipProbability": 0
                },
                {
                    "time": 1546289580,
                    "precipIntensity": 0,
                    "precipProbability": 0
                },
                {
                    "time": 1546289640,
                    "precipIntensity": 0,
                    "precipProbability": 0
                },
                {
                    "time": 1546289700,
                    "precipIntensity": 0,
                    "precipProbability": 0
                },
                {
                    "time": 1546289760,
                    "precipIntensity": 0,
                    "precipProbability": 0
                },
                {
                    "time": 1546289820,
                    "precipIntensity": 0,
                    "precipProbability": 0
                },
                {
                    "time": 1546289880,
                    "precipIntensity": 0,
                    "precipProbability": 0
                },
                {
                    "time": 1546289940,
                    "precipIntensity": 0,
                    "precipProbability": 0
                },
                {
                    "time": 1546290000,
                    "precipIntensity": 0,
                    "precipProbability": 0
                },
                {
                    "time": 1546290060,
                    "precipIntensity": 0,
                    "precipProbability": 0
                },
                {
                    "time": 1546290120,
                    "precipIntensity": 0,
                    "precipProbability": 0
                },
                {
                    "time": 1546290180,
                    "precipIntensity": 0,
                    "precipProbability": 0
                },
                {
                    "time": 1546290240,
                    "precipIntensity": 0,
                    "precipProbability": 0
                },
                {
                    "time": 1546290300,
                    "precipIntensity": 0,
                    "precipProbability": 0
                },
                {
                    "time": 1546290360,
                    "precipIntensity": 0,
                    "precipProbability": 0
                },
                {
                    "time": 1546290420,
                    "precipIntensity": 0,
                    "precipProbability": 0
                },
                {
                    "time": 1546290480,
                    "precipIntensity": 0,
                    "precipProbability": 0
                },
                {
                    "time": 1546290540,
                    "precipIntensity": 0,
                    "precipProbability": 0
                },
                {
                    "time": 1546290600,
                    "precipIntensity": 0,
                    "precipProbability": 0
                },
                {
                    "time": 1546290660,
                    "precipIntensity": 0,
                    "precipProbability": 0
                },
                {
                    "time": 1546290720,
                    "precipIntensity": 0,
                    "precipProbability": 0
                },
                {
                    "time": 1546290780,
                    "precipIntensity": 0,
                    "precipProbability": 0
                },
                {
                    "time": 1546290840,
                    "precipIntensity": 0,
                    "precipProbability": 0
                },
                {
                    "time": 1546290900,
                    "precipIntensity": 0,
                    "precipProbability": 0
                },
                {
                    "time": 1546290960,
                    "precipIntensity": 0,
                    "precipProbability": 0
                },
                {
                    "time": 1546291020,
                    "precipIntensity": 0,
                    "precipProbability": 0
                },
                {
                    "time": 1546291080,
                    "precipIntensity": 0,
                    "precipProbability": 0
                },
                {
                    "time": 1546291140,
                    "precipIntensity": 0,
                    "precipProbability": 0
                },
                {
                    "time": 1546291200,
                    "precipIntensity": 0,
                    "precipProbability": 0
                },
                {
                    "time": 1546291260,
                    "precipIntensity": 0,
                    "precipProbability": 0
                },
                {
                    "time": 1546291320,
                    "precipIntensity": 0,
                    "precipProbability": 0
                },
                {
                    "time": 1546291380,
                    "precipIntensity": 0,
                    "precipProbability": 0
                },
                {
                    "time": 1546291440,
                    "precipIntensity": 0,
                    "precipProbability": 0
                },
                {
                    "time": 1546291500,
                    "precipIntensity": 0,
                    "precipProbability": 0
                },
                {
                    "time": 1546291560,
                    "precipIntensity": 0,
                    "precipProbability": 0
                },
                {
                    "time": 1546291620,
                    "precipIntensity": 0,
                    "precipProbability": 0
                },
                {
                    "time": 1546291680,
                    "precipIntensity": 0,
                    "precipProbability": 0
                },
                {
                    "time": 1546291740,
                    "precipIntensity": 0,
                    "precipProbability": 0
                },
                {
                    "time": 1546291800,
                    "precipIntensity": 0,
                    "precipProbability": 0
                },
                {
                    "time": 1546291860,
                    "precipIntensity": 0,
                    "precipProbability": 0
                },
                {
                    "time": 1546291920,
                    "precipIntensity": 0,
                    "precipProbability": 0
                },
                {
                    "time": 1546291980,
                    "precipIntensity": 0,
                    "precipProbability": 0
                },
                {
                    "time": 1546292040,
                    "precipIntensity": 0,
                    "precipProbability": 0
                },
                {
                    "time": 1546292100,
                    "precipIntensity": 0,
                    "precipProbability": 0
                },
                {
                    "time": 1546292160,
                    "precipIntensity": 0,
                    "precipProbability": 0
                },
                {
                    "time": 1546292220,
                    "precipIntensity": 0,
                    "precipProbability": 0
                },
                {
                    "time": 1546292280,
                    "precipIntensity": 0,
                    "precipProbability": 0
                },
                {
                    "time": 1546292340,
                    "precipIntensity": 0,
                    "precipProbability": 0
                },
                {
                    "time": 1546292400,
                    "precipIntensity": 0,
                    "precipProbability": 0
                },
                {
                    "time": 1546292460,
                    "precipIntensity": 0,
                    "precipProbability": 0
                },
                {
                    "time": 1546292520,
                    "precipIntensity": 0,
                    "precipProbability": 0
                },
                {
                    "time": 1546292580,
                    "precipIntensity": 0,
                    "precipProbability": 0
                },
                {
                    "time": 1546292640,
                    "precipIntensity": 0,
                    "precipProbability": 0
                },
                {
                    "time": 1546292700,
                    "precipIntensity": 0,
                    "precipProbability": 0
                }]
            },
            "hourly":
            {
                "summary": "Mostly cloudy until tomorrow morning.",
                "icon": "partly-cloudy-night",
                "data": [
                {
                    "time": 1546286400,
                    "summary": "Overcast",
                    "icon": "cloudy",
                    "precipIntensity": 0,
                    "precipProbability": 0,
                    "temperature": 9.11,
                    "apparentTemperature": 7.17,
                    "dewPoint": 5,
                    "humidity": 0.75,
                    "pressure": 1035.15,
                    "windSpeed": 7.76,
                    "windGust": 14.32,
                    "windBearing": 273,
                    "cloudCover": 0.95,
                    "uvIndex": 0,
                    "visibility": 10.01,
                    "ozone": 267.69
                },
                {
                    "time": 1546290000,
                    "summary": "Mostly Cloudy",
                    "icon": "partly-cloudy-night",
                    "precipIntensity": 0,
                    "precipProbability": 0,
                    "temperature": 8.53,
                    "apparentTemperature": 5.57,
                    "dewPoint": 4.84,
                    "humidity": 0.78,
                    "pressure": 1035.03,
                    "windSpeed": 12.26,
                    "windGust": 15.2,
                    "windBearing": 247,
                    "cloudCover": 0.92,
                    "uvIndex": 0,
                    "visibility": 12.2,
                    "ozone": 268.5
                },
                {
                    "time": 1546293600,
                    "summary": "Mostly Cloudy",
                    "icon": "partly-cloudy-night",
                    "precipIntensity": 0,
                    "precipProbability": 0,
                    "temperature": 7.12,
                    "apparentTemperature": 4.23,
                    "dewPoint": 4.38,
                    "humidity": 0.83,
                    "pressure": 1034.97,
                    "windSpeed": 9.98,
                    "windGust": 15.68,
                    "windBearing": 254,
                    "cloudCover": 0.88,
                    "uvIndex": 0,
                    "visibility": 16.09,
                    "ozone": 269.06
                },
                {
                    "time": 1546297200,
                    "summary": "Mostly Cloudy",
                    "icon": "partly-cloudy-night",
                    "precipIntensity": 0,
                    "precipProbability": 0,
                    "temperature": 5.73,
                    "apparentTemperature": 3.08,
                    "dewPoint": 3.92,
                    "humidity": 0.88,
                    "pressure": 1034.88,
                    "windSpeed": 7.73,
                    "windGust": 15.96,
                    "windBearing": 263,
                    "cloudCover": 0.85,
                    "uvIndex": 0,
                    "visibility": 16.09,
                    "ozone": 269.55
                },
                {
                    "time": 1546300800,
                    "summary": "Mostly Cloudy",
                    "icon": "partly-cloudy-night",
                    "precipIntensity": 0,
                    "precipProbability": 0,
                    "temperature": 5.08,
                    "apparentTemperature": 2.58,
                    "dewPoint": 3.72,
                    "humidity": 0.91,
                    "pressure": 1034.82,
                    "windSpeed": 6.78,
                    "windGust": 16.16,
                    "windBearing": 275,
                    "cloudCover": 0.85,
                    "uvIndex": 0,
                    "visibility": 16.09,
                    "ozone": 269.94
                },
                {
                    "time": 1546304400,
                    "summary": "Mostly Cloudy",
                    "icon": "partly-cloudy-night",
                    "precipIntensity": 0,
                    "precipProbability": 0,
                    "temperature": 4.99,
                    "apparentTemperature": 2.48,
                    "dewPoint": 3.69,
                    "humidity": 0.91,
                    "pressure": 1034.7,
                    "windSpeed": 6.77,
                    "windGust": 16.23,
                    "windBearing": 250,
                    "cloudCover": 0.85,
                    "uvIndex": 0,
                    "visibility": 16.09,
                    "ozone": 270.25
                },
                {
                    "time": 1546308000,
                    "summary": "Mostly Cloudy",
                    "icon": "partly-cloudy-night",
                    "precipIntensity": 0,
                    "precipProbability": 0,
                    "temperature": 4.92,
                    "apparentTemperature": 2.37,
                    "dewPoint": 3.66,
                    "humidity": 0.92,
                    "pressure": 1034.58,
                    "windSpeed": 6.85,
                    "windGust": 16.24,
                    "windBearing": 321,
                    "cloudCover": 0.83,
                    "uvIndex": 0,
                    "visibility": 16.09,
                    "ozone": 270.42
                },
                {
                    "time": 1546311600,
                    "summary": "Mostly Cloudy",
                    "icon": "partly-cloudy-night",
                    "precipIntensity": 0,
                    "precipProbability": 0,
                    "temperature": 4.95,
                    "apparentTemperature": 2.35,
                    "dewPoint": 3.69,
                    "humidity": 0.92,
                    "pressure": 1034.43,
                    "windSpeed": 7,
                    "windGust": 16.5,
                    "windBearing": 286,
                    "cloudCover": 0.79,
                    "uvIndex": 0,
                    "visibility": 16.09,
                    "ozone": 270.69
                },
                {
                    "time": 1546315200,
                    "summary": "Mostly Cloudy",
                    "icon": "partly-cloudy-night",
                    "precipIntensity": 0,
                    "precipProbability": 0,
                    "temperature": 5.01,
                    "apparentTemperature": 2.32,
                    "dewPoint": 3.81,
                    "humidity": 0.92,
                    "pressure": 1034.19,
                    "windSpeed": 7.36,
                    "windGust": 17.1,
                    "windBearing": 282,
                    "cloudCover": 0.77,
                    "uvIndex": 0,
                    "visibility": 16.09,
                    "ozone": 271
                },
                {
                    "time": 1546318800,
                    "summary": "Mostly Cloudy",
                    "icon": "partly-cloudy-night",
                    "precipIntensity": 0,
                    "precipProbability": 0,
                    "temperature": 5.07,
                    "apparentTemperature": 2.24,
                    "dewPoint": 3.97,
                    "humidity": 0.93,
                    "pressure": 1033.95,
                    "windSpeed": 7.84,
                    "windGust": 17.96,
                    "windBearing": 278,
                    "cloudCover": 0.75,
                    "uvIndex": 0,
                    "visibility": 16.09,
                    "ozone": 271.49
                },
                {
                    "time": 1546322400,
                    "summary": "Mostly Cloudy",
                    "icon": "partly-cloudy-night",
                    "precipIntensity": 0,
                    "precipProbability": 0,
                    "temperature": 5.24,
                    "apparentTemperature": 2.35,
                    "dewPoint": 4.11,
                    "humidity": 0.92,
                    "pressure": 1033.84,
                    "windSpeed": 8.22,
                    "windGust": 19.1,
                    "windBearing": 279,
                    "cloudCover": 0.67,
                    "uvIndex": 0,
                    "visibility": 16.09,
                    "ozone": 272.1
                },
                {
                    "time": 1546326000,
                    "summary": "Partly Cloudy",
                    "icon": "partly-cloudy-night",
                    "precipIntensity": 0,
                    "precipProbability": 0,
                    "temperature": 5.23,
                    "apparentTemperature": 2.31,
                    "dewPoint": 4.19,
                    "humidity": 0.93,
                    "pressure": 1033.93,
                    "windSpeed": 8.32,
                    "windGust": 20.93,
                    "windBearing": 282,
                    "cloudCover": 0.46,
                    "uvIndex": 0,
                    "visibility": 16.09,
                    "ozone": 273.13
                },
                {
                    "time": 1546329600,
                    "summary": "Clear",
                    "icon": "clear-night",
                    "precipIntensity": 0,
                    "precipProbability": 0,
                    "temperature": 5.01,
                    "apparentTemperature": 2.03,
                    "dewPoint": 4.29,
                    "humidity": 0.95,
                    "pressure": 1034.11,
                    "windSpeed": 8.33,
                    "windGust": 23.05,
                    "windBearing": 288,
                    "cloudCover": 0.2,
                    "uvIndex": 0,
                    "visibility": 16.09,
                    "ozone": 274.33
                },
                {
                    "time": 1546333200,
                    "summary": "Clear",
                    "icon": "clear-day",
                    "precipIntensity": 0,
                    "precipProbability": 0,
                    "temperature": 4.98,
                    "apparentTemperature": 1.98,
                    "dewPoint": 4.53,
                    "humidity": 0.97,
                    "pressure": 1034.3,
                    "windSpeed": 8.43,
                    "windGust": 24.27,
                    "windBearing": 294,
                    "cloudCover": 0.01,
                    "uvIndex": 0,
                    "visibility": 16.09,
                    "ozone": 275.47
                },
                {
                    "time": 1546336800,
                    "summary": "Clear",
                    "icon": "clear-day",
                    "precipIntensity": 0,
                    "precipProbability": 0,
                    "temperature": 5.64,
                    "apparentTemperature": 2.68,
                    "dewPoint": 5.08,
                    "humidity": 0.96,
                    "pressure": 1034.42,
                    "windSpeed": 8.81,
                    "windGust": 23.89,
                    "windBearing": 301,
                    "cloudCover": 0,
                    "uvIndex": 0,
                    "visibility": 16.09,
                    "ozone": 276.43
                },
                {
                    "time": 1546340400,
                    "summary": "Clear",
                    "icon": "clear-day",
                    "precipIntensity": 0,
                    "precipProbability": 0,
                    "temperature": 7.14,
                    "apparentTemperature": 4.42,
                    "dewPoint": 5.82,
                    "humidity": 0.91,
                    "pressure": 1034.6,
                    "windSpeed": 9.29,
                    "windGust": 22.62,
                    "windBearing": 308,
                    "cloudCover": 0,
                    "uvIndex": 0,
                    "visibility": 16.09,
                    "ozone": 277.42
                },
                {
                    "time": 1546344000,
                    "summary": "Clear",
                    "icon": "clear-day",
                    "precipIntensity": 0,
                    "precipProbability": 0,
                    "temperature": 8.57,
                    "apparentTemperature": 6.11,
                    "dewPoint": 6.38,
                    "humidity": 0.86,
                    "pressure": 1034.72,
                    "windSpeed": 9.56,
                    "windGust": 21.25,
                    "windBearing": 316,
                    "cloudCover": 0.01,
                    "uvIndex": 1,
                    "visibility": 16.09,
                    "ozone": 278
                },
                {
                    "time": 1546347600,
                    "summary": "Clear",
                    "icon": "clear-day",
                    "precipIntensity": 0,
                    "precipProbability": 0,
                    "temperature": 9.27,
                    "apparentTemperature": 7.01,
                    "dewPoint": 6.81,
                    "humidity": 0.85,
                    "pressure": 1034.82,
                    "windSpeed": 9.39,
                    "windGust": 19.85,
                    "windBearing": 324,
                    "cloudCover": 0.18,
                    "uvIndex": 0,
                    "visibility": 16.09,
                    "ozone": 278.34
                },
                {
                    "time": 1546351200,
                    "summary": "Partly Cloudy",
                    "icon": "partly-cloudy-day",
                    "precipIntensity": 0.0229,
                    "precipProbability": 0.05,
                    "precipType": "rain",
                    "temperature": 9.68,
                    "apparentTemperature": 7.6,
                    "dewPoint": 7.09,
                    "humidity": 0.84,
                    "pressure": 1034.94,
                    "windSpeed": 8.99,
                    "windGust": 18.37,
                    "windBearing": 333,
                    "cloudCover": 0.41,
                    "uvIndex": 0,
                    "visibility": 16.09,
                    "ozone": 278.44
                },
                {
                    "time": 1546354800,
                    "summary": "Partly Cloudy",
                    "icon": "partly-cloudy-day",
                    "precipIntensity": 0.0432,
                    "precipProbability": 0.05,
                    "precipType": "rain",
                    "temperature": 9.57,
                    "apparentTemperature": 7.53,
                    "dewPoint": 6.78,
                    "humidity": 0.83,
                    "pressure": 1035.22,
                    "windSpeed": 8.69,
                    "windGust": 17.38,
                    "windBearing": 342,
                    "cloudCover": 0.56,
                    "uvIndex": 0,
                    "visibility": 16.09,
                    "ozone": 278.13
                },
                {
                    "time": 1546358400,
                    "summary": "Mostly Cloudy",
                    "icon": "partly-cloudy-night",
                    "precipIntensity": 0.0406,
                    "precipProbability": 0.03,
                    "precipType": "rain",
                    "temperature": 8.69,
                    "apparentTemperature": 6.45,
                    "dewPoint": 5.46,
                    "humidity": 0.8,
                    "pressure": 1035.83,
                    "windSpeed": 8.66,
                    "windGust": 17.31,
                    "windBearing": 351,
                    "cloudCover": 0.6,
                    "uvIndex": 0,
                    "visibility": 16.09,
                    "ozone": 277.5
                },
                {
                    "time": 1546362000,
                    "summary": "Partly Cloudy",
                    "icon": "partly-cloudy-night",
                    "precipIntensity": 0.0305,
                    "precipProbability": 0.02,
                    "precipType": "rain",
                    "temperature": 7.46,
                    "apparentTemperature": 4.94,
                    "dewPoint": 3.56,
                    "humidity": 0.76,
                    "pressure": 1036.58,
                    "windSpeed": 8.68,
                    "windGust": 17.79,
                    "windBearing": 1,
                    "cloudCover": 0.56,
                    "uvIndex": 0,
                    "visibility": 16.09,
                    "ozone": 276.58
                },
                {
                    "time": 1546365600,
                    "summary": "Partly Cloudy",
                    "icon": "partly-cloudy-night",
                    "precipIntensity": 0.0229,
                    "precipProbability": 0.01,
                    "precipType": "rain",
                    "temperature": 6.48,
                    "apparentTemperature": 3.75,
                    "dewPoint": 2.03,
                    "humidity": 0.73,
                    "pressure": 1037.35,
                    "windSpeed": 8.66,
                    "windGust": 18.15,
                    "windBearing": 8,
                    "cloudCover": 0.48,
                    "uvIndex": 0,
                    "visibility": 16.09,
                    "ozone": 275.49
                },
                {
                    "time": 1546369200,
                    "summary": "Partly Cloudy",
                    "icon": "partly-cloudy-night",
                    "precipIntensity": 0.0102,
                    "precipProbability": 0.01,
                    "precipType": "rain",
                    "temperature": 5.64,
                    "apparentTemperature": 2.74,
                    "dewPoint": 1.2,
                    "humidity": 0.73,
                    "pressure": 1038.11,
                    "windSpeed": 8.6,
                    "windGust": 18.24,
                    "windBearing": 10,
                    "cloudCover": 0.33,
                    "uvIndex": 0,
                    "visibility": 16.09,
                    "ozone": 274.17
                },
                {
                    "time": 1546372800,
                    "summary": "Clear",
                    "icon": "clear-night",
                    "precipIntensity": 0,
                    "precipProbability": 0,
                    "temperature": 4.93,
                    "apparentTemperature": 1.9,
                    "dewPoint": 0.69,
                    "humidity": 0.74,
                    "pressure": 1038.83,
                    "windSpeed": 8.47,
                    "windGust": 18.27,
                    "windBearing": 8,
                    "cloudCover": 0.15,
                    "uvIndex": 0,
                    "visibility": 16.09,
                    "ozone": 272.66
                },
                {
                    "time": 1546376400,
                    "summary": "Clear",
                    "icon": "clear-night",
                    "precipIntensity": 0,
                    "precipProbability": 0,
                    "temperature": 4.23,
                    "apparentTemperature": 1.09,
                    "dewPoint": 0.32,
                    "humidity": 0.76,
                    "pressure": 1039.46,
                    "windSpeed": 8.33,
                    "windGust": 18.21,
                    "windBearing": 5,
                    "cloudCover": 0.02,
                    "uvIndex": 0,
                    "visibility": 16.09,
                    "ozone": 271.33
                },
                {
                    "time": 1546380000,
                    "summary": "Clear",
                    "icon": "clear-night",
                    "precipIntensity": 0,
                    "precipProbability": 0,
                    "temperature": 3.63,
                    "apparentTemperature": 0.43,
                    "dewPoint": 0.02,
                    "humidity": 0.77,
                    "pressure": 1040,
                    "windSpeed": 8.08,
                    "windGust": 18.06,
                    "windBearing": 2,
                    "cloudCover": 0.01,
                    "uvIndex": 0,
                    "visibility": 16.09,
                    "ozone": 270.01
                },
                {
                    "time": 1546383600,
                    "summary": "Clear",
                    "icon": "clear-night",
                    "precipIntensity": 0,
                    "precipProbability": 0,
                    "temperature": 3.19,
                    "apparentTemperature": -0.03,
                    "dewPoint": -0.16,
                    "humidity": 0.79,
                    "pressure": 1040.47,
                    "windSpeed": 7.8,
                    "windGust": 17.86,
                    "windBearing": 358,
                    "cloudCover": 0.02,
                    "uvIndex": 0,
                    "visibility": 16.09,
                    "ozone": 268.81
                },
                {
                    "time": 1546387200,
                    "summary": "Clear",
                    "icon": "clear-night",
                    "precipIntensity": 0,
                    "precipProbability": 0,
                    "temperature": 2.8,
                    "apparentTemperature": -0.43,
                    "dewPoint": -0.36,
                    "humidity": 0.8,
                    "pressure": 1040.88,
                    "windSpeed": 7.59,
                    "windGust": 17.6,
                    "windBearing": 356,
                    "cloudCover": 0.06,
                    "uvIndex": 0,
                    "visibility": 16.09,
                    "ozone": 267.71
                },
                {
                    "time": 1546390800,
                    "summary": "Clear",
                    "icon": "clear-night",
                    "precipIntensity": 0,
                    "precipProbability": 0,
                    "temperature": 2.45,
                    "apparentTemperature": -0.83,
                    "dewPoint": -0.58,
                    "humidity": 0.8,
                    "pressure": 1041.22,
                    "windSpeed": 7.52,
                    "windGust": 17.18,
                    "windBearing": 354,
                    "cloudCover": 0.13,
                    "uvIndex": 0,
                    "visibility": 16.09,
                    "ozone": 266.79
                },
                {
                    "time": 1546394400,
                    "summary": "Clear",
                    "icon": "clear-night",
                    "precipIntensity": 0,
                    "precipProbability": 0,
                    "temperature": 2.19,
                    "apparentTemperature": -1.15,
                    "dewPoint": -0.8,
                    "humidity": 0.81,
                    "pressure": 1041.56,
                    "windSpeed": 7.53,
                    "windGust": 16.69,
                    "windBearing": 353,
                    "cloudCover": 0.23,
                    "uvIndex": 0,
                    "visibility": 16.09,
                    "ozone": 266.04
                },
                {
                    "time": 1546398000,
                    "summary": "Partly Cloudy",
                    "icon": "partly-cloudy-night",
                    "precipIntensity": 0,
                    "precipProbability": 0,
                    "temperature": 2.02,
                    "apparentTemperature": -1.36,
                    "dewPoint": -1,
                    "humidity": 0.8,
                    "pressure": 1041.77,
                    "windSpeed": 7.52,
                    "windGust": 16.42,
                    "windBearing": 352,
                    "cloudCover": 0.3,
                    "uvIndex": 0,
                    "visibility": 16.09,
                    "ozone": 265.17
                },
                {
                    "time": 1546401600,
                    "summary": "Partly Cloudy",
                    "icon": "partly-cloudy-night",
                    "precipIntensity": 0,
                    "precipProbability": 0,
                    "temperature": 1.83,
                    "apparentTemperature": -1.56,
                    "dewPoint": -1.16,
                    "humidity": 0.8,
                    "pressure": 1041.98,
                    "windSpeed": 7.47,
                    "windGust": 16.66,
                    "windBearing": 351,
                    "cloudCover": 0.34,
                    "uvIndex": 0,
                    "visibility": 16.09,
                    "ozone": 264.43
                },
                {
                    "time": 1546405200,
                    "summary": "Partly Cloudy",
                    "icon": "partly-cloudy-night",
                    "precipIntensity": 0,
                    "precipProbability": 0,
                    "temperature": 1.59,
                    "apparentTemperature": -1.83,
                    "dewPoint": -1.32,
                    "humidity": 0.81,
                    "pressure": 1042.05,
                    "windSpeed": 7.39,
                    "windGust": 17.13,
                    "windBearing": 351,
                    "cloudCover": 0.35,
                    "uvIndex": 0,
                    "visibility": 16.09,
                    "ozone": 263.74
                },
                {
                    "time": 1546408800,
                    "summary": "Partly Cloudy",
                    "icon": "partly-cloudy-night",
                    "precipIntensity": 0,
                    "precipProbability": 0,
                    "temperature": 1.27,
                    "apparentTemperature": -2.19,
                    "dewPoint": -1.43,
                    "humidity": 0.82,
                    "pressure": 1042.22,
                    "windSpeed": 7.3,
                    "windGust": 17.22,
                    "windBearing": 350,
                    "cloudCover": 0.34,
                    "uvIndex": 0,
                    "visibility": 16.09,
                    "ozone": 263.18
                },
                {
                    "time": 1546412400,
                    "summary": "Partly Cloudy",
                    "icon": "partly-cloudy-night",
                    "precipIntensity": 0,
                    "precipProbability": 0,
                    "temperature": 0.92,
                    "apparentTemperature": -2.57,
                    "dewPoint": -1.51,
                    "humidity": 0.84,
                    "pressure": 1042.57,
                    "windSpeed": 7.17,
                    "windGust": 16.72,
                    "windBearing": 350,
                    "cloudCover": 0.3,
                    "uvIndex": 0,
                    "visibility": 16.09,
                    "ozone": 263.06
                },
                {
                    "time": 1546416000,
                    "summary": "Clear",
                    "icon": "clear-night",
                    "precipIntensity": 0,
                    "precipProbability": 0,
                    "temperature": 0.43,
                    "apparentTemperature": -3.09,
                    "dewPoint": -1.53,
                    "humidity": 0.87,
                    "pressure": 1043,
                    "windSpeed": 6.99,
                    "windGust": 15.86,
                    "windBearing": 348,
                    "cloudCover": 0.24,
                    "uvIndex": 0,
                    "visibility": 16.09,
                    "ozone": 263.18
                },
                {
                    "time": 1546419600,
                    "summary": "Clear",
                    "icon": "clear-day",
                    "precipIntensity": 0,
                    "precipProbability": 0,
                    "temperature": 0.4,
                    "apparentTemperature": -3.07,
                    "dewPoint": -1.42,
                    "humidity": 0.88,
                    "pressure": 1043.31,
                    "windSpeed": 6.84,
                    "windGust": 14.89,
                    "windBearing": 348,
                    "cloudCover": 0.19,
                    "uvIndex": 0,
                    "visibility": 16.09,
                    "ozone": 263.37
                },
                {
                    "time": 1546423200,
                    "summary": "Clear",
                    "icon": "clear-day",
                    "precipIntensity": 0,
                    "precipProbability": 0,
                    "temperature": 1.06,
                    "apparentTemperature": -2.23,
                    "dewPoint": -1.11,
                    "humidity": 0.85,
                    "pressure": 1043.5,
                    "windSpeed": 6.71,
                    "windGust": 13.79,
                    "windBearing": 350,
                    "cloudCover": 0.16,
                    "uvIndex": 0,
                    "visibility": 16.09,
                    "ozone": 263.73
                },
                {
                    "time": 1546426800,
                    "summary": "Clear",
                    "icon": "clear-day",
                    "precipIntensity": 0,
                    "precipProbability": 0,
                    "temperature": 2.52,
                    "apparentTemperature": -0.43,
                    "dewPoint": -0.64,
                    "humidity": 0.8,
                    "pressure": 1043.53,
                    "windSpeed": 6.57,
                    "windGust": 12.57,
                    "windBearing": 351,
                    "cloudCover": 0.13,
                    "uvIndex": 1,
                    "visibility": 16.09,
                    "ozone": 264.23
                },
                {
                    "time": 1546430400,
                    "summary": "Clear",
                    "icon": "clear-day",
                    "precipIntensity": 0,
                    "precipProbability": 0,
                    "temperature": 3.75,
                    "apparentTemperature": 1.13,
                    "dewPoint": -0.23,
                    "humidity": 0.75,
                    "pressure": 1043.53,
                    "windSpeed": 6.37,
                    "windGust": 11.58,
                    "windBearing": 352,
                    "cloudCover": 0.1,
                    "uvIndex": 1,
                    "visibility": 16.09,
                    "ozone": 264.48
                },
                {
                    "time": 1546434000,
                    "summary": "Clear",
                    "icon": "clear-day",
                    "precipIntensity": 0,
                    "precipProbability": 0,
                    "temperature": 4.46,
                    "apparentTemperature": 2.08,
                    "dewPoint": 0.03,
                    "humidity": 0.73,
                    "pressure": 1043.42,
                    "windSpeed": 6.07,
                    "windGust": 10.94,
                    "windBearing": 354,
                    "cloudCover": 0.07,
                    "uvIndex": 1,
                    "visibility": 16.09,
                    "ozone": 264.42
                },
                {
                    "time": 1546437600,
                    "summary": "Clear",
                    "icon": "clear-day",
                    "precipIntensity": 0,
                    "precipProbability": 0,
                    "temperature": 4.95,
                    "apparentTemperature": 2.79,
                    "dewPoint": 0.2,
                    "humidity": 0.71,
                    "pressure": 1043.2,
                    "windSpeed": 5.71,
                    "windGust": 10.51,
                    "windBearing": 354,
                    "cloudCover": 0.03,
                    "uvIndex": 0,
                    "visibility": 16.09,
                    "ozone": 264.05
                },
                {
                    "time": 1546441200,
                    "summary": "Clear",
                    "icon": "clear-day",
                    "precipIntensity": 0,
                    "precipProbability": 0,
                    "temperature": 4.94,
                    "apparentTemperature": 2.87,
                    "dewPoint": 0.26,
                    "humidity": 0.72,
                    "pressure": 1043.06,
                    "windSpeed": 5.5,
                    "windGust": 10.37,
                    "windBearing": 354,
                    "cloudCover": 0.01,
                    "uvIndex": 0,
                    "visibility": 16.09,
                    "ozone": 263.75
                },
                {
                    "time": 1546444800,
                    "summary": "Clear",
                    "icon": "clear-night",
                    "precipIntensity": 0,
                    "precipProbability": 0,
                    "temperature": 4.37,
                    "apparentTemperature": 2.17,
                    "dewPoint": 0.17,
                    "humidity": 0.74,
                    "pressure": 1043.13,
                    "windSpeed": 5.54,
                    "windGust": 10.76,
                    "windBearing": 353,
                    "cloudCover": 0.02,
                    "uvIndex": 0,
                    "visibility": 16.09,
                    "ozone": 263.42
                },
                {
                    "time": 1546448400,
                    "summary": "Clear",
                    "icon": "clear-night",
                    "precipIntensity": 0,
                    "precipProbability": 0,
                    "temperature": 3.42,
                    "apparentTemperature": 1,
                    "dewPoint": 0.01,
                    "humidity": 0.78,
                    "pressure": 1043.32,
                    "windSpeed": 5.68,
                    "windGust": 11.43,
                    "windBearing": 351,
                    "cloudCover": 0.06,
                    "uvIndex": 0,
                    "visibility": 16.09,
                    "ozone": 263.16
                },
                {
                    "time": 1546452000,
                    "summary": "Clear",
                    "icon": "clear-night",
                    "precipIntensity": 0,
                    "precipProbability": 0,
                    "temperature": 2.82,
                    "apparentTemperature": 0.26,
                    "dewPoint": -0.14,
                    "humidity": 0.81,
                    "pressure": 1043.42,
                    "windSpeed": 5.74,
                    "windGust": 11.79,
                    "windBearing": 350,
                    "cloudCover": 0.09,
                    "uvIndex": 0,
                    "visibility": 16.09,
                    "ozone": 262.58
                },
                {
                    "time": 1546455600,
                    "summary": "Clear",
                    "icon": "clear-night",
                    "precipIntensity": 0,
                    "precipProbability": 0,
                    "temperature": 2.49,
                    "apparentTemperature": -0.09,
                    "dewPoint": -0.32,
                    "humidity": 0.82,
                    "pressure": 1043.42,
                    "windSpeed": 5.65,
                    "windGust": 11.53,
                    "windBearing": 350,
                    "cloudCover": 0.13,
                    "uvIndex": 0,
                    "visibility": 16.09,
                    "ozone": 261.61
                },
                {
                    "time": 1546459200,
                    "summary": "Clear",
                    "icon": "clear-night",
                    "precipIntensity": 0,
                    "precipProbability": 0,
                    "temperature": 2.34,
                    "apparentTemperature": -0.2,
                    "dewPoint": -0.49,
                    "humidity": 0.82,
                    "pressure": 1043.35,
                    "windSpeed": 5.47,
                    "windGust": 10.96,
                    "windBearing": 351,
                    "cloudCover": 0.18,
                    "uvIndex": 0,
                    "visibility": 16.09,
                    "ozone": 260.41
                }]
            },
            "daily":
            {
                "summary": "No precipitation throughout the week, with high temperatures falling to 4°C on Friday.",
                "icon": "clear-day",
                "data": [
                {
                    "time": 1546214400,
                    "summary": "Mostly cloudy throughout the day.",
                    "icon": "partly-cloudy-day",
                    "sunriseTime": 1546243592,
                    "sunsetTime": 1546272054,
                    "moonPhase": 0.82,
                    "precipIntensity": 0,
                    "precipIntensityMax": 0.0025,
                    "precipIntensityMaxTime": 1546297200,
                    "precipProbability": 0,
                    "temperatureHigh": 9.71,
                    "temperatureHighTime": 1546257600,
                    "temperatureLow": 4.92,
                    "temperatureLowTime": 1546308000,
                    "apparentTemperatureHigh": 8.44,
                    "apparentTemperatureHighTime": 1546257600,
                    "apparentTemperatureLow": 2.03,
                    "apparentTemperatureLowTime": 1546329600,
                    "dewPoint": 5.97,
                    "humidity": 0.8,
                    "pressure": 1035.68,
                    "windSpeed": 6.95,
                    "windGust": 15.96,
                    "windGustTime": 1546297200,
                    "windBearing": 275,
                    "cloudCover": 0.93,
                    "uvIndex": 1,
                    "uvIndexTime": 1546257600,
                    "visibility": 10.88,
                    "ozone": 275.76,
                    "temperatureMin": 5.73,
                    "temperatureMinTime": 1546297200,
                    "temperatureMax": 10.19,
                    "temperatureMaxTime": 1546214400,
                    "apparentTemperatureMin": 3.08,
                    "apparentTemperatureMinTime": 1546297200,
                    "apparentTemperatureMax": 10.19,
                    "apparentTemperatureMaxTime": 1546214400
                },
                {
                    "time": 1546300800,
                    "summary": "Partly cloudy starting in the afternoon, continuing until evening.",
                    "icon": "partly-cloudy-night",
                    "sunriseTime": 1546329988,
                    "sunsetTime": 1546358514,
                    "moonPhase": 0.86,
                    "precipIntensity": 0.0076,
                    "precipIntensityMax": 0.0432,
                    "precipIntensityMaxTime": 1546354800,
                    "precipProbability": 0.05,
                    "precipType": "rain",
                    "temperatureHigh": 9.68,
                    "temperatureHighTime": 1546351200,
                    "temperatureLow": 0.43,
                    "temperatureLowTime": 1546416000,
                    "apparentTemperatureHigh": 7.6,
                    "apparentTemperatureHighTime": 1546351200,
                    "apparentTemperatureLow": -3.09,
                    "apparentTemperatureLowTime": 1546416000,
                    "dewPoint": 3.78,
                    "humidity": 0.86,
                    "pressure": 1035.76,
                    "windSpeed": 6.71,
                    "windGust": 24.27,
                    "windGustTime": 1546333200,
                    "windBearing": 321,
                    "cloudCover": 0.4,
                    "uvIndex": 1,
                    "uvIndexTime": 1546344000,
                    "visibility": 16.09,
                    "ozone": 273.84,
                    "temperatureMin": 3.19,
                    "temperatureMinTime": 1546383600,
                    "temperatureMax": 9.68,
                    "temperatureMaxTime": 1546351200,
                    "apparentTemperatureMin": -0.03,
                    "apparentTemperatureMinTime": 1546383600,
                    "apparentTemperatureMax": 7.6,
                    "apparentTemperatureMaxTime": 1546351200
                },
                {
                    "time": 1546387200,
                    "summary": "Partly cloudy in the morning.",
                    "icon": "partly-cloudy-night",
                    "sunriseTime": 1546416380,
                    "sunsetTime": 1546444977,
                    "moonPhase": 0.89,
                    "precipIntensity": 0,
                    "precipIntensityMax": 0.0025,
                    "precipIntensityMaxTime": 1546398000,
                    "precipProbability": 0,
                    "temperatureHigh": 4.95,
                    "temperatureHighTime": 1546437600,
                    "temperatureLow": -0.96,
                    "temperatureLowTime": 1546502400,
                    "apparentTemperatureHigh": 2.87,
                    "apparentTemperatureHighTime": 1546441200,
                    "apparentTemperatureLow": -3.34,
                    "apparentTemperatureLowTime": 1546502400,
                    "dewPoint": -0.66,
                    "humidity": 0.8,
                    "pressure": 1042.79,
                    "windSpeed": 6.38,
                    "windGust": 17.6,
                    "windGustTime": 1546387200,
                    "windBearing": 351,
                    "cloudCover": 0.17,
                    "uvIndex": 1,
                    "uvIndexTime": 1546426800,
                    "visibility": 16.09,
                    "ozone": 263.47,
                    "temperatureMin": 0.4,
                    "temperatureMinTime": 1546419600,
                    "temperatureMax": 4.95,
                    "temperatureMaxTime": 1546437600,
                    "apparentTemperatureMin": -3.09,
                    "apparentTemperatureMinTime": 1546416000,
                    "apparentTemperatureMax": 2.87,
                    "apparentTemperatureMaxTime": 1546441200
                },
                {
                    "time": 1546473600,
                    "summary": "Clear throughout the day.",
                    "icon": "clear-day",
                    "sunriseTime": 1546502769,
                    "sunsetTime": 1546531442,
                    "moonPhase": 0.92,
                    "precipIntensity": 0,
                    "precipIntensityMax": 0.0051,
                    "precipIntensityMaxTime": 1546495200,
                    "precipProbability": 0,
                    "temperatureHigh": 4.56,
                    "temperatureHighTime": 1546524000,
                    "temperatureLow": -3.44,
                    "temperatureLowTime": 1546588800,
                    "apparentTemperatureHigh": 2.82,
                    "apparentTemperatureHighTime": 1546524000,
                    "apparentTemperatureLow": -5.01,
                    "apparentTemperatureLowTime": 1546585200,
                    "dewPoint": -2.24,
                    "humidity": 0.79,
                    "pressure": 1042.6,
                    "windSpeed": 4.2,
                    "windGust": 10.11,
                    "windGustTime": 1546488000,
                    "windBearing": 350,
                    "cloudCover": 0.03,
                    "uvIndex": 1,
                    "uvIndexTime": 1546516800,
                    "visibility": 16.09,
                    "ozone": 283.28,
                    "temperatureMin": -1.58,
                    "temperatureMinTime": 1546556400,
                    "temperatureMax": 4.56,
                    "temperatureMaxTime": 1546524000,
                    "apparentTemperatureMin": -3.34,
                    "apparentTemperatureMinTime": 1546502400,
                    "apparentTemperatureMax": 2.82,
                    "apparentTemperatureMaxTime": 1546524000
                },
                {
                    "time": 1546560000,
                    "summary": "Partly cloudy throughout the day.",
                    "icon": "partly-cloudy-day",
                    "sunriseTime": 1546589154,
                    "sunsetTime": 1546617911,
                    "moonPhase": 0.95,
                    "precipIntensity": 0,
                    "precipIntensityMax": 0.0051,
                    "precipIntensityMaxTime": 1546617600,
                    "precipProbability": 0,
                    "temperatureHigh": 4.29,
                    "temperatureHighTime": 1546610400,
                    "temperatureLow": -0.64,
                    "temperatureLowTime": 1546675200,
                    "apparentTemperatureHigh": 2.47,
                    "apparentTemperatureHighTime": 1546610400,
                    "apparentTemperatureLow": -3.65,
                    "apparentTemperatureLowTime": 1546675200,
                    "dewPoint": -3.16,
                    "humidity": 0.79,
                    "pressure": 1041.98,
                    "windSpeed": 4.07,
                    "windGust": 13.91,
                    "windGustTime": 1546635600,
                    "windBearing": 317,
                    "cloudCover": 0.36,
                    "uvIndex": 1,
                    "uvIndexTime": 1546603200,
                    "visibility": 16.09,
                    "ozone": 278.43,
                    "temperatureMin": -3.44,
                    "temperatureMinTime": 1546588800,
                    "temperatureMax": 4.29,
                    "temperatureMaxTime": 1546610400,
                    "apparentTemperatureMin": -5.01,
                    "apparentTemperatureMinTime": 1546585200,
                    "apparentTemperatureMax": 2.47,
                    "apparentTemperatureMaxTime": 1546610400
                },
                {
                    "time": 1546646400,
                    "summary": "Partly cloudy throughout the day.",
                    "icon": "partly-cloudy-night",
                    "sunriseTime": 1546675536,
                    "sunsetTime": 1546704381,
                    "moonPhase": 0.98,
                    "precipIntensity": 0.0025,
                    "precipIntensityMax": 0.0076,
                    "precipIntensityMaxTime": 1546714800,
                    "precipProbability": 0.06,
                    "precipType": "rain",
                    "temperatureHigh": 5.92,
                    "temperatureHighTime": 1546696800,
                    "temperatureLow": -0.57,
                    "temperatureLowTime": 1546761600,
                    "apparentTemperatureHigh": 4.23,
                    "apparentTemperatureHighTime": 1546696800,
                    "apparentTemperatureLow": -2.17,
                    "apparentTemperatureLowTime": 1546761600,
                    "dewPoint": 0.68,
                    "humidity": 0.88,
                    "pressure": 1040.09,
                    "windSpeed": 5.12,
                    "windGust": 15.72,
                    "windGustTime": 1546671600,
                    "windBearing": 324,
                    "cloudCover": 0.3,
                    "uvIndex": 1,
                    "uvIndexTime": 1546689600,
                    "visibility": 16.09,
                    "ozone": 283.48,
                    "temperatureMin": -0.67,
                    "temperatureMinTime": 1546678800,
                    "temperatureMax": 5.92,
                    "temperatureMaxTime": 1546696800,
                    "apparentTemperatureMin": -3.65,
                    "apparentTemperatureMinTime": 1546675200,
                    "apparentTemperatureMax": 4.23,
                    "apparentTemperatureMaxTime": 1546696800
                },
                {
                    "time": 1546732800,
                    "summary": "Partly cloudy throughout the day.",
                    "icon": "partly-cloudy-day",
                    "sunriseTime": 1546761915,
                    "sunsetTime": 1546790854,
                    "moonPhase": 0.02,
                    "precipIntensity": 0.0025,
                    "precipIntensityMax": 0.0076,
                    "precipIntensityMaxTime": 1546736400,
                    "precipProbability": 0.09,
                    "precipType": "rain",
                    "temperatureHigh": 4.3,
                    "temperatureHighTime": 1546783200,
                    "temperatureLow": -1.11,
                    "temperatureLowTime": 1546848000,
                    "apparentTemperatureHigh": 4.3,
                    "apparentTemperatureHighTime": 1546783200,
                    "apparentTemperatureLow": -3.68,
                    "apparentTemperatureLowTime": 1546848000,
                    "dewPoint": -0.27,
                    "humidity": 0.88,
                    "pressure": 1038.79,
                    "windSpeed": 2.82,
                    "windGust": 10.43,
                    "windGustTime": 1546743600,
                    "windBearing": 295,
                    "cloudCover": 0.5,
                    "uvIndex": 1,
                    "uvIndexTime": 1546776000,
                    "visibility": 16.09,
                    "ozone": 296.92,
                    "temperatureMin": -0.71,
                    "temperatureMinTime": 1546765200,
                    "temperatureMax": 4.3,
                    "temperatureMaxTime": 1546783200,
                    "apparentTemperatureMin": -2.41,
                    "apparentTemperatureMinTime": 1546765200,
                    "apparentTemperatureMax": 4.3,
                    "apparentTemperatureMaxTime": 1546783200
                },
                {
                    "time": 1546819200,
                    "summary": "Mostly cloudy throughout the day.",
                    "icon": "partly-cloudy-day",
                    "sunriseTime": 1546848291,
                    "sunsetTime": 1546877330,
                    "moonPhase": 0.05,
                    "precipIntensity": 0.0076,
                    "precipIntensityMax": 0.0305,
                    "precipIntensityMaxTime": 1546894800,
                    "precipProbability": 0.13,
                    "precipType": "rain",
                    "temperatureHigh": 4.27,
                    "temperatureHighTime": 1546880400,
                    "temperatureLow": 4.32,
                    "temperatureLowTime": 1546891200,
                    "apparentTemperatureHigh": 2.2,
                    "apparentTemperatureHighTime": 1546880400,
                    "apparentTemperatureLow": 1.06,
                    "apparentTemperatureLowTime": 1546934400,
                    "dewPoint": 0.19,
                    "humidity": 0.88,
                    "pressure": 1033.56,
                    "windSpeed": 5.16,
                    "windGust": 25.38,
                    "windGustTime": 1546902000,
                    "windBearing": 239,
                    "cloudCover": 0.68,
                    "uvIndex": 1,
                    "uvIndexTime": 1546862400,
                    "visibility": 16.09,
                    "ozone": 288.06,
                    "temperatureMin": -1.11,
                    "temperatureMinTime": 1546848000,
                    "temperatureMax": 4.91,
                    "temperatureMaxTime": 1546902000,
                    "apparentTemperatureMin": -3.86,
                    "apparentTemperatureMinTime": 1546851600,
                    "apparentTemperatureMax": 2.2,
                    "apparentTemperatureMaxTime": 1546880400
                }]
            },
            "flags":
            {
                "sources": ["nearest-precip", "meteoalarm", "cmc", "gfs", "icon", "isd", "madis", "darksky"],
                "meteoalarm-license": "Based on data from EUMETNET - MeteoAlarm [https://www.meteoalarm.eu/]. Time delays between this website and the MeteoAlarm website are possible; for the most up to date information about alert levels as published by the participating National Meteorological Services please use the MeteoAlarm website.",
                "nearest-station": 3.936,
                "units": "uk"
            },
            "offset": 0
        }`;
        
        this.setState(state => {
            state.data = JSON.parse(jsonMockData);
            state.contentReady = true;
            return state;
        });
 
    }

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
                    <div className="weather-section">
                        <a href="https://www.google.com/search?q=london+forecast" target="_blank">
                            <div style={imageStyle} className={'weather-icon ' + weather.currently.icon}></div>
                            <div className="summary">
                                {/* <div className="text">{weather.currently.summary}</div> */}
                                <span className="real">{parseInt(weather.currently.temperature) } <span className="celsius">°C</span></span>
                                {/* <span className="apparent">{weather.currently.apparentTemperature}</span> */}
                            </div>
                            {/* <div className="other">
                                <div className="windspeed">Wind: {weather.currently.windSpeed} km/h</div>
                                <div className="precip-probability">Wind: {weather.currently.precipProbability}%</div>
                                <div className="precip-intensity">Wind: {weather.currently.precipIntensity}%</div>
                            </div> */}
                        </a>
                    </div>
                
            );
        }
    }
}