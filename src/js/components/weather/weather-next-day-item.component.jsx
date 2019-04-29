import React, { Component } from 'react';
import _map from 'lodash/map';
import _each from 'lodash/each';

export default class WeatherNextDayItem extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        const dayData = this.props.dayData;
        const dayDate = new Date(dayData.time*1000);
        const dayNames = ["Sun","Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        return(
            <div className="day">
                <div className="day-name">
                    {`${dayNames[dayDate.getDay()]} ${dayDate.getDate()}`}
                </div>
                <div className="temperature">
                    <span className="high">
                        {Math.round(dayData.temperatureHigh)}<span className="celsius">°</span>
                    </span>
                    <span className="separator">/</span>
                    <span className="low">
                        {Math.round(dayData.temperatureLow)}<span className="celsius">°</span>
                    </span>
                </div>    
                
            </div>
        );
    }
}