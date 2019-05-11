import React, { Component } from 'react';
import ChartistGraph from 'react-chartist';
import Chartist from 'chartist';

export default class WeatherToday extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedOption: 'temperature',
            isComponentVisible: this.props.visibility
        };
        this.handleOptionChange = this.handleOptionChange.bind(this);
    }

    addLabel(position, data) {
        // if x and y exist concat them otherwise output only the existing value
        var value = data.value.x !== undefined && data.value.y ?
          (data.value.x + ', ' + data.value.y) :
          data.value.y || data.value.x;
  
        data.group.elem('text', {
          x: position.x,
          y: position.y -10, // Y offset
          style: 'text-anchor: middle'
        }, 'ct-label').text(Math.round(value) + "°");
      }

    drawSmallDot(data) {
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

    labelPositionCalculation = {
        point: function(data) {
          return {
            x: data.x,
            y: data.y
          };
        },
        bar: {
          center: function(data) {
            return {
              x: data.x1 + (data.x2 - data.x1) / 2,
              y: data.y1
            };
          }
        }
      };

    onDrawHandler(data) {
        if (data.type === 'point') {
            var positonCalculator = this.labelPositionCalculation[data.type];
            this.addLabel(positonCalculator(data), data);
            this.drawSmallDot(data);
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
            <div className={'today-hours-panel ' + this.visibilityClass} id="today-hours-id">
                <div className="select-option">
                    <div className="radio">
                        <label>
                            <input type="radio" value="temperature" 
                                checked={this.state.selectedOption === 'temperature'} 
                                onChange={this.handleOptionChange} />
                            <div className="inner-radio">
                                <img src={chrome.runtime.getURL('../assets/temperature-button.png')}/>
                                <div className="text">
                                    Temperature
                                </div>
                            </div>
                        </label>
                    </div>
                    <div className="radio">
                        <label>
                            <input type="radio" value="rain" 
                                checked={this.state.selectedOption === 'rain'} 
                                onChange={this.handleOptionChange} />
                                
                            <div className="inner-radio">
                                <img src={chrome.runtime.getURL('../assets/rain-button.png')}/>
                                <div className="text">
                                    Rain
                                </div>
                            </div>
                        </label>
                    </div>
                    <div className="radio">
                        <label>
                            <input type="radio" value="wind" 
                                checked={this.state.selectedOption === 'wind'} 
                                onChange={this.handleOptionChange} />
                            <div className="inner-radio">
                                <img src={chrome.runtime.getURL('../assets/wind-button.png')}/>
                                <div className="text">
                                    Wind
                                </div>
                            </div>
                        </label>
                    </div>
                </div>
                <div className="temperature" style={{'visibility': (this.props.visibility && this.state.selectedOption === "temperature")? 'visible': 'hidden'}}>
                    <ChartistGraph 
                        data={data} 
                        options={options} 
                        type={type} 
                        listener={{
                            draw: e => this.onDrawHandler(e)
                        }}/>
                </div>
                <div className="rain" style={{'visibility': (this.props.visibility && this.state.selectedOption === "rain")? 'visible': 'hidden'}}>
                    <h2>Rains</h2>
                </div>
                <div className="wind" style={{'visibility': (this.props.visibility && this.state.selectedOption === "wind")? 'visible': 'hidden'}}>
                    <h2>Winds</h2>
                </div>
            </div>
          )
    }
}