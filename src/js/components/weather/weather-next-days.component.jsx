import { Component } from 'react';
import WeatherNextDayItem from './weather-next-day-item.component';
import PropTypes from 'prop-types';
import {getFormattedTime} from '../../helper';

export default class WeatherNextDays extends Component {
    constructor(props) {
        super(props);
        this.self = this;
        this.hoveredDay = {
            summary: "Nothing",
            sunrise: 0,
            sunset: 0,
            moon_phase : {
                icon: '../../assets/0_new_moon.png',
                phaseNameEng: "none",
                phaseNameEs: "nada"
            }
        };
        this.showDetails = false;

    }

    getmoon_phase(moon_phaseValue) {
        let moon_phase = {
            phaseNameEng: "none",
            phaseNameEs: "nada"
        };
        if (moon_phaseValue > 0.9375 || moon_phaseValue <= 0.0625) {
            // New Moon
            moon_phase.icon = '../../assets/0_new_moon.png';
            moon_phase.phaseNameEng = ((moon_phaseValue == 0) ? "Complete ": "") + "New Moon";
            moon_phase.phaseNameEs = ((moon_phaseValue == 0) ? "Completa ": "") + "Luna Nueva";
        } else if (moon_phaseValue > 0.0625 && moon_phaseValue <= 0.1875) {
            // Waxing Crescent
            moon_phase.icon = '../../assets/1_waxing_crescent.png';
            moon_phase.phaseNameEng = "Waxing Crescent";
            moon_phase.phaseNameEs = "Luna Menguante";
        } else if (moon_phaseValue > 0.1875 && moon_phaseValue <= 0.3125) {
            // First Quarter
            moon_phase.icon = '../../assets/2_first_quarter.png';
            moon_phase.phaseNameEng = "First Quarter";
            moon_phase.phaseNameEs = "Cuarto Menguante";
        } else if (moon_phaseValue > 0.3125 && moon_phaseValue <= 0.4375) {
            // Waxing Gibbous
            moon_phase.icon = '../../assets/3_waxing_gibbous.png';
            moon_phase.phaseNameEng = "Waxing Gibbous";
            moon_phase.phaseNameEs = "Gibosa Menguante";
        } else if (moon_phaseValue > 0.4375 && moon_phaseValue <= 0.5625) {
            // Full Moon
            moon_phase.icon = '../../assets/4_full_moon.png';
            moon_phase.phaseNameEng = ((moon_phaseValue == 0.5) ? "Complete ": "") + "Full Moon";
            moon_phase.phaseNameEs = ((moon_phaseValue == 0.5) ? "Completa ": "") + "Luna Llena";
        } else if (moon_phaseValue > 0.5625 && moon_phaseValue <= 0.7375) {
            // Waning Gibbous
            moon_phase.icon = '../../assets/5_waning_gibbous.png';
            moon_phase.phaseNameEng = "Waning Gibbous";
            moon_phase.phaseNameEs = "Gibosa Creciente";
        } else if (moon_phaseValue > 0.7375 && moon_phaseValue <= 0.8125) {
            // Third Quarter
            moon_phase.icon = '../../assets/6_third_quarter.png';
            moon_phase.phaseNameEng = "Third Quarter";
            moon_phase.phaseNameEs = "Cuarto Creciente";
        } else if (moon_phaseValue > 0.8125 && moon_phaseValue <= 0.9375) {
            // Waning Crescent
            moon_phase.icon = '../../assets/7_waning_crescent.png';
            moon_phase.phaseNameEng = "Waning Crescent";
            moon_phase.phaseNameEs = "Luna Creciente";
        }
        return moon_phase;
    }

    setShowDetails(showDetails) {
        let shouldForceRender = (showDetails !== this.showDetails);
        this.showDetails = showDetails;
        if (shouldForceRender) {
            this.forceUpdate();
        }

    }

    setHoveredDay(dayIndex) {
        this.hoveredDay.summary = this.props.dailyData[dayIndex].weather.description;
        this.hoveredDay.sunrise = this.props.dailyData[dayIndex].sunrise;
        this.hoveredDay.sunset = this.props.dailyData[dayIndex].sunset;
        this.hoveredDay.moon_phase = this.getmoon_phase(this.props.dailyData[dayIndex].moon_phase);
        this.showDetails = true;
        this.forceUpdate();
    }

    render() {
        const nextDaysArray = this.props.dailyData;
        return(
            <div className="next-days-container"
                 onMouseEnter={() => this.setShowDetails(true)}
                 onMouseLeave={() => this.setShowDetails(false)}>
                <div className="next-days-panel">
                    {nextDaysArray.map((dayData, key) =>
                        <div
                            key={key}
                            onMouseEnter={() => this.setHoveredDay(key)}>
                            <WeatherNextDayItem
                                dayData={dayData}
                                key={key}
                            />
                        </div>
                    )}
                </div>
                {/*{ true ? // this.showDetails*/}
                <div className={"next-day-details " + (this.showDetails ? 'show-nextdays' : 'hide-nextdays')} >
                    <div className="summary">
                        {this.hoveredDay.summary}
                    </div>
                    <div className="dawn">
                        <img src={chrome.runtime.getURL('../../assets/sunrise.png')}/>
                        <span className="text">
                            Sunrise time {getFormattedTime(this.hoveredDay.sunrise)}
                        </span>
                    </div>
                    <div className="dusk">
                        <img src={chrome.runtime.getURL('../../assets/sunset.png')}/>
                        <span className="text">
                            Sunset time {getFormattedTime(this.hoveredDay.sunset)}
                        </span>
                    </div>
                    <div className="moon_phase">
                        <img src={chrome.runtime.getURL(this.hoveredDay.moon_phase.icon)}/>
                        <div className="text">
                            <div className="text-en">{this.hoveredDay.moon_phase.phaseNameEng}</div>
                            <div className="text-es">{this.hoveredDay.moon_phase.phaseNameEs}</div>
                        </div>


                    </div>
                </div>
                {/*: null }*/}

            </div>
        );
    }
}

WeatherNextDays.propTypes = {
    dailyData: PropTypes.array
};