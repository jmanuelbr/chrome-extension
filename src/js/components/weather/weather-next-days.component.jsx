import React, { Component } from 'react';
import WeatherNextDayItem from './weather-next-day-item.component';
import PropTypes from 'prop-types';

export default class WeatherNextDays extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const nextDaysArray = this.props.dailyData.data;
        return(
            <div className="next-days-panel">
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

WeatherNextDays.propTypes = {
    dailyData: PropTypes.shape({
        data: PropTypes.array
    })
};