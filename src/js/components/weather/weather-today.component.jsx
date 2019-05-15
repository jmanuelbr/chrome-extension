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

    addLabel(position, data, type, delayIncrement, imgSize) {
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
        else if (type === "wind") {
            symbol = 'kmh';
            offset = 5 + (imgSize/2);
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
                begin: (delayIncrement !== undefined ? delayIncrement : 200),
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

        onDrawHandlerWind(data) {
            if (data.type === 'point') {
                
                var positonCalculator = this.labelPositionCalculation[data.type];
                var meta = Chartist.deserialize(data.meta);
                

                let imgSize = '';
                const value = data.series[data.index].value;
                if (value <= 6) {
                    imgSize = 15;
                }
                else if (value > 6 && value <= 10) {
                    imgSize = 20;
                }
                else if (value > 10 && value <= 15) {
                    imgSize = 25;
                }
                else if (value > 15) {
                    imgSize = 32;
                }
                const transOriginX = data.x - imgSize/2;
                const transOriginY = data.y - imgSize/2;
                const transformStr = transOriginX + 'px ' + transOriginY + 'px';
                const rotateStr = "rotate(" + meta.windBearing + "," + imgSize/2 + "," + imgSize/2 + ")";
                var imageElement = new Chartist.Svg('image', {
                    height: imgSize,
                    width: imgSize,
                    x: data.x - (imgSize / 2),
                    y: data.y - (imgSize / 2),
                    'xlink:href': meta.imageUrl,
                    ['transform-origin']: transformStr,
                    transform: rotateStr
                });
                imageElement.animate({
                    opacity: {
                        begin: meta.delayIncrement,
                        dur: 500,
                        from: 0,
                        to: 1,
                        easing: 'easeOutQuart'
                    }
                });
                this.addLabel(positonCalculator(data), data, 'wind', meta.delayIncrement,imgSize);
                data.element.replace(imageElement);
            }
        }

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

        Array.prototype.updateNullDaysWind = function(hoursAdded) {
            for (var i = 0; i < hoursAdded; i++) {
                this[i] = null;
            }
        };

        let hoursList = []; // X axe labels
        let temperatureList = []; // Y axe labels temperature
        let windList = [];
        let rainList = [];
        let allTemperatureList = []; // Useful to calculate max and min temperature for Y axe
        let allWindList = [];
        const todayArray = this.props.todayData.data;
        let seriesList =[]; // Array of arrays for all given days
        let seriesListRain = [];
        let seriesListWind = [];
        let numHoursAdded = 0;
        let nullDays = [];
        let nullDaysRain = [];
        let nullDaysWind = [];
        const todayArrayLength = todayArray.length -1 ;
        let delayIncrement = 50;
        let series = 0;
        todayArray.map((hourData, key) => {
            const hour = new Date(hourData.time*1000).getHours();
            const rain = Math.round(hourData.precipProbability*100);
            temperatureList.push(hourData.temperature);
            windList.push({
                value: Math.round(hourData.windSpeed),
                meta: {
                    imageUrl: chrome.runtime.getURL('../assets/wind-arrow-serie' + series + '.png'),
                    windBearing: hourData.windBearing,
                    delayIncrement: delayIncrement
                  }
            })
            delayIncrement += 15;
            rainList.push(rain);
            hoursList.push(hour + "h");
            allTemperatureList.push(hourData.temperature);
            allWindList.push(hourData.windSpeed);
            numHoursAdded++;
            if (hour == 0 || key == todayArrayLength) {
                series++;
                // break each day into 1 section to depict them in different colors
                seriesList.push(nullDays.concat(temperatureList));
                seriesListWind.push(nullDaysWind.concat(windList));
                var rainListPreNulls = nullDaysRain.concat(rainList);
                this.pushNullsToSerie(rainListPreNulls, todayArray.length - numHoursAdded);
                seriesListRain.push(rainListPreNulls);
                rainListPreNulls = [];
                
                nullDays.updateNullDays(numHoursAdded);
                nullDaysRain.updateNullDaysRain(numHoursAdded);
                nullDaysWind.updateNullDaysWind(numHoursAdded);

                const lastElement = temperatureList[temperatureList.length - 1];
                temperatureList = [];
                rainList = [];
                windList = [];
                temperatureList.push(lastElement);
            }
        });

        var rainData = {
            labels: hoursList,
            series: seriesListRain
        }

        var windData = {
            labels: hoursList,
            series: seriesListWind
        }
 
        var data = {
            labels: hoursList,
            series: seriesList
          };

          const maxTemperature = Math.round(Math.max(...allTemperatureList)) + 1;
          const minTemperature = Math.round(Math.min(...allTemperatureList));

          const maxWind = Math.round(Math.max(...allTemperatureList)) + 1;

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

          var windOptions = {
            high: maxWind,
            low: 0,
            showPoint: true,
            showLine: false,
            chartPadding: {
                left: -10
              }
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
                    <ChartistGraph 
                        data={windData} 
                        options={windOptions} 
                        type={'Line'}
                        listener={{
                            draw: e => this.onDrawHandlerWind(e)
                        }}
                        />
                </div>
            </div>
          )
    }
}