import { Component } from 'react';
import PropTypes from 'prop-types';

export default class WeatherNextDayItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const dayData = this.props.dayData;
        const dayDate = new Date(dayData.dt * 1000);
        const dayNames = ["Sun","Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        
        return(
            <div className="day">
                <div className="day-name">
                    {`${dayNames[dayDate.getDay()]} ${dayDate.getDate()}`}
                </div>
                <div>
                    <img
                        className="weather-icon-daily"
                        src={chrome.runtime.getURL("../assets/weather-icons/" + dayData.weather[0].icon + ".png")}
                        width="22px"/>
                </div>
                <div className="temperature">
                    <span className="high">
                        {Math.round(dayData.temp.max)}<span className="celsius">°</span>
                    </span>
                    <span className="separator">/</span>
                    <span className="low">
                        {Math.round(dayData.temp.min)}<span className="celsius">°</span>
                    </span>
                </div>    
            </div>
        );
    }
}
WeatherNextDayItem.propTypes = {
    dayData: PropTypes.object
};