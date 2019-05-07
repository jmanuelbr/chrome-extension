import React, { Component } from 'react';
import WeatherTodayItem from './weather-today-item.component';

export default class WeatherToday extends Component {
    constructor(props) {
        super(props);
        
    }
    componentDidMount() {
        this.state = {
            canvasCtx: document.getElementById("temperature-graph").getContext("2d")
        };
        this.drawDots();
    }

    drawDots() {
        // console.log('Drawing dot');
        const todayArray = this.props.todayData.data;
        let offset = 3;
        todayArray.map((hourData, key) => {
            // console.log('hourData', hourData);
            this.state.canvasCtx.fillRect(offset,0,1,1);
            offset +=7;
        });
        
    }
    render() {
        const todayArray = this.props.todayData.data;
        return(
            <div className="today-hours-panel">
                {/* {todayArray.map((todayData, key) =>
                    <WeatherTodayItem
                        todayData={todayData}
                        key={key}
                    />
                )} */}
                <canvas id="temperature-graph" width="400" height="57"></canvas>
                <div className="hours">
                    {
                    todayArray.map((hourData, key) => {
                        const hour = new Date(hourData.time*1000).getHours();
                        // this.drawDot(hourData);
                        return (
                            <div className="hour" key={key}>
                                {hour}<span className="hour-symbol">"</span>
                            </div>
                        )}
                    )}
                </div>
                <div className="temperature-meter">
                    <div className="temperature"> 
                        <span className="number">40</span>
                        <span className="celsius">°</span>
                    </div>
                    <div className="temperature">
                        <span className="number">30</span>
                        <span className="celsius">°</span>
                    </div>
                    <div className="temperature">
                        <span className="number">20</span>
                        <span className="celsius">°</span>
                    </div>
                    <div className="temperature">
                        <span className="number">10</span>
                        <span className="celsius">°</span>
                    </div>                                                                                
                </div>
                
            </div>
        );
    }
}