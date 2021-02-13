import { Component } from 'react';
import PropTypes from 'prop-types';

export default class WeatherNextDayItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const dayData = this.props.dayData;
        const dayDate = new Date(dayData.time*1000);
        const dayNames = ["Sun","Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        const weatherIconStyles = {
            background : `url('${chrome.runtime.getURL('../assets/weather.png')}') 0px 0px`,
            height: "31px", 
            width: "33px",
            backgroundSize : "280px 210px"
        };
        
        return(
            <div className="day">
                <div className="day-name">
                    {`${dayNames[dayDate.getDay()]} ${dayDate.getDate()}`}
                </div>
                <div 
                    className={`weather-icon-small ${dayData.icon}`}
                    style={weatherIconStyles}>
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
WeatherNextDayItem.propTypes = {
    dayData: PropTypes.object
};