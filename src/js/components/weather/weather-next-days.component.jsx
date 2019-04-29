import React, { Component } from 'react';
import _map from 'lodash/map';
import _each from 'lodash/each';
import WeatherNextDayItem from './weather-next-day-item.component';

export default class WeatherNextDays extends Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     contentReady: false,
        //     mocks: true,
        //     nextDaysVisible: true
        // };

        // this.toggleNextDays = this.toggleNextDays.bind(this);
    }

    componentDidMount() {
        // if (this.state.mocks) {
        //     this.setMockData();
        // }
        // else {
        //     this.weatherRequest();
        // }   
    }



 

    render() {
        const nextDaysArray = this.props.dailyData.data;
        console.log('nextDaysArray', nextDaysArray);

        return(
            <div className="next-days-scroll">
                {nextDaysArray.map((dayData, key) =>
                    <WeatherNextDayItem
                        dayData={dayData}
                        key={key}
                    />
                )}


            {/* {
                nextDaysArray.forEach(element => {
                    console.log('element',element);

                  })
            } */}

            {/* {_each(this.props.dailyData.data, (dayWeek, i) => (
                <span className="asdf">asd</span>
            ))} */}
                
            </div>
        );
    }
}