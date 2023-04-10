import { Component } from 'react';
import WeatherTemperatureChart from './charts/weather-temperature-chart.componet';
import WeatherRainChart from './charts/weather-rain-chart.component';
import WeatherWindChart from './charts/weather-wind-chart.component';
import PropTypes from 'prop-types';

export default class WeatherToday extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedOption: 'temperature',
            isComponentVisible: this.props.visibility
        };
        this.handleOptionChange = this.handleOptionChange.bind(this);
    }
       
    handleOptionChange(changeEvent) {
        this.setState({
            selectedOption: changeEvent.target.value
        });
    };

    render() {
        const todayData = this.props.todayData;
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
                    <WeatherTemperatureChart
                        data={todayData}
                    />
                </div>
                <div className="rain" style={{'visibility': (this.props.visibility && this.state.selectedOption === "rain")? 'visible': 'hidden'}}>
                    <WeatherRainChart
                        data={todayData}
                    />
                </div>
                <div className="wind" style={{'visibility': (this.props.visibility && this.state.selectedOption === "wind")? 'visible': 'hidden'}}>
                    <WeatherWindChart
                        data={todayData}
                    />
                </div>
            </div>
          );
    }
}

WeatherToday.propTypes = {
    todayData: PropTypes.array,
    visibility: PropTypes.bool
};