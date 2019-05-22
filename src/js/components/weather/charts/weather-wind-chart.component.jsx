import React, { Component } from 'react';
import {_startCase} from 'lodash/startCase';
import ChartistGraph from 'react-chartist';
import Chartist from 'chartist';

export default class WeatherWindChart extends Component {
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

    addLabel(position, data, delayIncrement, imgSize) {
        const offset = 5 + (imgSize/2);
        // if x and y exist concat them otherwise output only the existing value
        const value = data.value.x !== undefined && data.value.y ?
            (data.value.x + ', ' + data.value.y) :
            data.value.y || data.value.x;

        let element = data.group.elem('text', {
            x: position.x,
            y: position.y - offset, // Y offset
            style: 'text-anchor: middle'
        }, 'ct-label').text(Math.round(value) + 'kmh');
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
    
    positonCalculator(data) {
        return {
            x: data.x,
            y: data.y
        };
    }

    onDrawHandler(data) {
        if (data.type === 'point') {
            const meta = Chartist.deserialize(data.meta);
            let imgSize = 32;
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
            let imageElement = new Chartist.Svg('image', {
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
            this.addLabel(this.positonCalculator(data), data, meta.delayIncrement,imgSize);
            data.element.replace(imageElement);
        }
    }

    componentDidMount() {
        Array.prototype.updateNullDaysWind = function(hoursAdded) {
            for (let i = 0; i < hoursAdded; i++) {
                this[i] = null;
            }
        };
        let hoursList = []; // X axe labels
        let windList = [];
        let allWindList = [];
        const todayArray = this.props.data;
        let seriesListWind = [];
        let numHoursAdded = 0;
        let nullDaysWind = [];
        const todayArrayLength = todayArray.length -1 ;
        let delayIncrement = 50;
        let series = 0;
        todayArray.map((hourData, key) => {
            const hour = new Date(hourData.time*1000).getHours();
            windList.push({
                value: Math.round(hourData.windSpeed),
                meta: {
                    imageUrl: chrome.runtime.getURL('../assets/wind-arrow-serie' + series + '.png'),
                    windBearing: hourData.windBearing,
                    delayIncrement: delayIncrement
                  }
            });
            delayIncrement += 15;
            hoursList.push(hour + "h");
            allWindList.push(hourData.windSpeed);
            numHoursAdded++;
            if (hour == 0 || key == todayArrayLength) {
                series++;
                seriesListWind.push(nullDaysWind.concat(windList));
                nullDaysWind.updateNullDaysWind(numHoursAdded);
                windList = [];
            }
        });
        
        const maxWind = Math.round(Math.max(...allWindList)) + 1;
        const options = {
            high: maxWind,
            low: 0,
            showPoint: true,
            showLine: false,
            chartPadding: {
                left: -10
            }
        };

        this.setState(state => {
            state.data.labels = hoursList;
            state.data.series = seriesListWind;
            state.options = options;
            return state;
        }); 
    }

    render() { 
        return(
            <ChartistGraph 
                data={this.state.data} 
                options={this.state.options} 
                type={'Line'}
                listener={{
                    draw: e => this.onDrawHandler(e)
                }}
            />
        );
    }    
}