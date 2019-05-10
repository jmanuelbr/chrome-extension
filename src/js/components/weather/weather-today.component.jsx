import React, { Component } from 'react';
import ChartistGraph from 'react-chartist';
import Chartist from 'chartist';

export default class WeatherToday extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedOption: 'temperature'
        };
        this.handleOptionChange = this.handleOptionChange.bind(this);
    }
    componentDidMount() {

    }

    onDrawHandler(data) {
        if (data.type === 'point') {
            let fillColour = 'black';
            switch (data.seriesIndex) {
                case 0: {
                    fillColour = 'blue';
                    break;
                }
                case 1: {
                    fillColour = '#F05A50';
                    break;
                }
                case 2: {
                    fillColour = '#F4C63E';
                    break;
                }
                default: {
                    // Do nothing
                    break;
                }
            }
            var point = new Chartist.Svg('circle', {
              cx: data.x,
              cy: data.y,
              r:  4,
              fill: fillColour
            }, 'ct-slice');
        
            data.element.replace(point);
        }
    }

    handleOptionChange(changeEvent) {
        this.setState({
          selectedOption: changeEvent.target.value
        });
      };

    render() {
        Array.prototype.updateNullDays = function(hoursAdded) {
            for (var i = 0; i < hoursAdded-1; i++) {
                this[i] = null;
            }
          };

        let hoursList = []; // X axe labels
        let temperatureList = []; // Y axe labels
        let allTemperatureList = []; // Useful to calculate max and min temperature for Y axe
        const todayArray = this.props.todayData.data;
        let seriesList =[]; // Array of arrays for all given days
        let numHoursAdded = 0;
        let nullDays = [];
        const todayArrayLength = todayArray.length -1 ;
        todayArray.map((hourData, key) => {
            const hour = new Date(hourData.time*1000).getHours();
            temperatureList.push(hourData.temperature);
            hoursList.push(hour + "h");
            allTemperatureList.push(hourData.temperature);
            numHoursAdded++;
            if (hour == 0 || key == todayArrayLength) {
                // break each day into 1 section to depict them in different colors
                seriesList.push(nullDays.concat(temperatureList));
                nullDays.updateNullDays(numHoursAdded);
                const lastElement = temperatureList[temperatureList.length - 1];
                temperatureList = [];
                temperatureList.push(lastElement);
            }
        });
 
        var data = {
            labels: hoursList,
            series: seriesList
          };

          const maxTemperature = Math.round(Math.max(...allTemperatureList)) + 1;
          const minTemperature = Math.round(Math.min(...allTemperatureList));

          var options = {
            high: maxTemperature,
            low: (minTemperature < 0 ? minTemperature : 0),
            axisX: {
              labelInterpolationFnc: function(value, index) {
                return index % 2 === 0 ? value : null;
              }
            },
            showArea: true,
            showPoint: true,
            chartPadding: {
                left: -10
              }
          };
       
          var type = 'Line';
       
          return (
            <div className="today-hours-panel">
                <div className="select-option">
                    <div className="radio">
                        <label>
                            <input type="radio" value="temperature" 
                                checked={this.state.selectedOption === 'temperature'} 
                                onChange={this.handleOptionChange} />
                            Temperature
                        </label>
                    </div>
                    <div className="radio">
                        <label>
                            <input type="radio" value="rain" 
                                checked={this.state.selectedOption === 'rain'} 
                                onChange={this.handleOptionChange} />
                            Rain
                        </label>
                    </div>
                    <div className="radio">
                        <label>
                            <input type="radio" value="wind" 
                                checked={this.state.selectedOption === 'wind'} 
                                onChange={this.handleOptionChange} />
                            Wind
                        </label>
                    </div>
                </div>
                <div className="temperatures">
                    <ChartistGraph 
                        data={data} 
                        options={options} 
                        type={type} 
                        listener={{
                            draw: e => this.onDrawHandler(e)
                        }}/>
                </div>
            </div>
          )
    }
}