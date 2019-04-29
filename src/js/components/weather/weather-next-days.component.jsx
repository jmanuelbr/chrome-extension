import React, { Component } from 'react';
import WeatherNextDayItem from './weather-next-day-item.component';

export default class WeatherNextDays extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const nextDaysArray = this.props.dailyData.data;
        return(
            <div className="next-days-scroll">
                {nextDaysArray.map((dayData, key) =>
                    <WeatherNextDayItem
                        dayData={dayData}
                        key={key}
                    />
                )}
            </div>
        );
    }
}