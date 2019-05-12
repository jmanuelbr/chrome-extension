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

    addLabel(position, data, type) {
        var symbol = '';
        var offset = 0;
        if (type === "temperature") {
            symbol = '°';
            offset = 10;
        }
        else if (type === "rain") {
            symbol = '%';
            offset = 5;
        }

        // if x and y exist concat them otherwise output only the existing value
        var value = data.value.x !== undefined && data.value.y ?
          (data.value.x + ', ' + data.value.y) :
          data.value.y || data.value.x;
  
        if (type === "rain" && value === undefined) {
            value = 0;
        }  
        var element = data.group.elem('text', {
          x: position.x,
          y: position.y - offset, // Y offset
          style: 'text-anchor: middle'
        }, 'ct-label').text(Math.round(value) + symbol);
        element.animate({
            opacity: {
                begin: 200,
                dur: 500,
                from: 0,
                to: 1,
                easing: 'easeOutQuart'
            }
        });
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
        if(data.type === 'point') {
            var circle = new Chartist.Svg('circle', {
              cx: [data.x], cy:[data.y],
            }, 'ct-circle');
            var positonCalculator = this.labelPositionCalculation[data.type];
            this.addLabel(positonCalculator(data), data, 'temperature');

            circle.animate({
                opacity: {
                    begin: 200,
                    dur: 500,
                    from: 0,
                    to: 1,
                    easing: 'easeOutQuart'
                }
            });
            data.element.replace(circle);
        }
        if(data.type === 'line' || data.type === 'area') {
            data.element.animate({
              d: {
                begin: data.index,
                dur: 600,
                from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
                to: data.path.clone().stringify(),
                easing: Chartist.Svg.Easing.easeOutQuint
              }
            });
        }
        if(data.type == 'bar') {
            var positonCalculator = function(data) {
                return {
                  x: data.x1 + (data.x2 - data.x1) / 2,
                  y: data.y2
                };
              }
            
            data.element.animate({
                y2: {
                    dur: 260,
                    from: data.y1,
                    to: data.y2
                }
            });
            this.addLabel(positonCalculator(data), data, 'rain');
        }
    }

    handleOptionChange(changeEvent) {
        this.setState({
            selectedOption: changeEvent.target.value
        });
    };
    pushNullsToSerie(array, numNulls) {
        for (var i = 0; i < numNulls; i++) {
            array.push(null);
        }
    }

    render() {
        Array.prototype.updateNullDays = function(hoursAdded) {
            for (var i = 0; i < hoursAdded-1; i++) {
                this[i] = null;
            }
        };

        Array.prototype.updateNullDaysRain = function(hoursAdded) {
            for (var i = 0; i < hoursAdded; i++) {
                this[i] = null;
            }
        };

        let hoursList = []; // X axe labels
        let temperatureList = []; // Y axe labels temperature
        let rainList = [];
        let allTemperatureList = []; // Useful to calculate max and min temperature for Y axe
        const todayArray = this.props.todayData.data;
        let seriesList =[]; // Array of arrays for all given days
        let seriesListRain = [];
        let numHoursAdded = 0;
        let nullDays = [];
        let nullDaysRain = [];
        const todayArrayLength = todayArray.length -1 ;
        todayArray.map((hourData, key) => {
            const hour = new Date(hourData.time*1000).getHours();
            const rain = Math.round(hourData.precipProbability*100);
            temperatureList.push(hourData.temperature);
            rainList.push(rain);
            hoursList.push(hour + "h");
            allTemperatureList.push(hourData.temperature);
            numHoursAdded++;
            if (hour == 0 || key == todayArrayLength) {
                // break each day into 1 section to depict them in different colors
                seriesList.push(nullDays.concat(temperatureList));
                var rainListPreNulls = nullDaysRain.concat(rainList);
                this.pushNullsToSerie(rainListPreNulls, todayArray.length - numHoursAdded);
                seriesListRain.push(rainListPreNulls);
                rainListPreNulls = [];
                
                nullDays.updateNullDays(numHoursAdded);
                nullDaysRain.updateNullDaysRain(numHoursAdded);
                const lastElement = temperatureList[temperatureList.length - 1];
                temperatureList = [];
                rainList = [];
                temperatureList.push(lastElement);
            }
        });


        var rainData = {
            labels: hoursList,
            series: seriesListRain
        }
 
        var data = {
            labels: hoursList,
            series: seriesList
          };

          const maxTemperature = Math.round(Math.max(...allTemperatureList)) + 1;
          const minTemperature = Math.round(Math.min(...allTemperatureList));


          var options = {
            high: maxTemperature,
            low: (minTemperature < 0 ? minTemperature : 0),
            showArea: true,
            showPoint: true,
            chartPadding: {
                left: -10
              }
          };

          var rainOptions = {
            high: 100,
            low: 0,
            chartPadding: {
                left: -10
              },
            stackBars: true
          };

          

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
                        type={'Line'} 
                        listener={{
                            draw: e => this.onDrawHandler(e)
                        }}/>
                </div>
                <div className="rain" style={{'visibility': (this.props.visibility && this.state.selectedOption === "rain")? 'visible': 'hidden'}}>
                    <ChartistGraph 
                        data={rainData} 
                        options={rainOptions} 
                        type={'Bar'} 
                        listener={{
                            draw: e => this.onDrawHandler(e)
                        }}/>
                </div>
                <div className="wind" style={{'visibility': (this.props.visibility && this.state.selectedOption === "wind")? 'visible': 'hidden'}}>
                    <h2>Winds</h2>
                </div>
            </div>
          )
    }
}