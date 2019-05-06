import React, { Component } from 'react';
import _map from 'lodash/map';

export default class WeatherTodayItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        // const dayData = this.props.dayData;
        // const dayDate = new Date(dayData.time*1000);
        // const dayNames = ["Sun","Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        // const weatherIconStyles = {
        //     background : `url('${chrome.runtime.getURL('../assets/weather.png')}') 0px 0px`,
        //     height: "31px", 
        //     width: "33px",
        //     backgroundSize : "280px 210px"
        // };
        
        return(
            <div className="day">
                <div className="hour">
                    Hour
                </div>
            </div>
        );
    }
}