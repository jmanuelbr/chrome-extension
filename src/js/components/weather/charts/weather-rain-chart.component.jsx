import React, { Component } from 'react';
import {_startCase} from 'lodash/startCase';
import ChartistGraph from 'react-chartist';

export default class WeatherRainChart extends Component {
    constructor (props) {
        super(props);

        this.state = {
            data: {
                labels: [],
                series: []
            },
            options: {}
        };
    }

    pushNullsToSerie(array, numNulls) {
        for (let i = 0; i < numNulls; i++) {
            array.push(null);
        }
    }

    addLabel(position, data) {
        // if x and y exist concat them otherwise output only the existing value
        let value = data.value.x !== undefined && data.value.y ?
            (data.value.x + ', ' + data.value.y) :
            data.value.y || data.value.x;
   
        if (value === undefined) {
            value = 0;
        }  
        let element = data.group.elem('text', {
          x: position.x,
          y: position.y - 5, // Y offset
          style: 'text-anchor: middle'
        }, 'ct-label').text(Math.round(value) + '%');
        element.animate({
            opacity: {
                begin: 50,
                dur: 500,
                from: 0,
                to: 1,
                easing: 'easeOutQuart'
            }
        });
    }

    onDrawHandler(data) {
        if (data.type == 'bar') {
            let positonCalculator = function(data) {
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
            this.addLabel(positonCalculator(data), data);
        }
    }

    componentDidMount() {
        Array.prototype.updateNullDaysRain = function(hoursAdded) {
            for (var i = 0; i < hoursAdded; i++) {
                this[i] = null;
            }
        };

        const todayArray = this.props.data;
        let hoursList = []; // X axe labels
        let rainList = [];
        let seriesListRain = [];
        let numHoursAdded = 0;
        let nullDaysRain = [];
        const todayArrayLength = todayArray.length -1 ;

        todayArray.map((hourData, key) => {
            const hour = new Date(hourData.time * 1000).getHours();
            const rain = Math.round(hourData.precipProbability * 100);
            rainList.push(rain);
            hoursList.push(hour + "h");
            numHoursAdded++;
            if (hour == 0 || key == todayArrayLength) {
                // break each day into 1 section to depict them in different colors
                var rainListPreNulls = nullDaysRain.concat(rainList);
                this.pushNullsToSerie(rainListPreNulls, todayArray.length - numHoursAdded);
                seriesListRain.push(rainListPreNulls);
                rainListPreNulls = [];
                nullDaysRain.updateNullDaysRain(numHoursAdded);
                rainList = [];
            }
        });

        const options = {
            high: 100,
            low: 0,
            chartPadding: {
                left: -10
              },
            stackBars: true
          };

        this.setState(state => {
            state.data.labels = hoursList;
            state.data.series = seriesListRain;
            state.options = options;
            return state;
        });
    }

    render() {
        return(
            <ChartistGraph 
                data={this.state.data} 
                options={this.state.options} 
                type={'Bar'} 
                listener={{
                draw: e => this.onDrawHandler(e)
            }}/>
        )
    }    
}