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
            sunriseTime: 0,
            sunsetTime: 0,
            moonPhase : {
                icon: '../../assets/0_new_moon.png',
                phaseNameEng: "none",
                phaseNameEs: "nada"
            }
        };
        this.showDetails = false;

    }

    getMoonPhase(moonPhaseValue) {
        let moonPhase = {
            phaseNameEng: "none",
            phaseNameEs: "nada"
        };
        if (moonPhaseValue > 0.9375 || moonPhaseValue <= 0.0625) {
            // New Moon
            moonPhase.icon = '../../assets/0_new_moon.png';
            moonPhase.phaseNameEng = ((moonPhaseValue == 0) ? "Complete ": "") + "New Moon";
            moonPhase.phaseNameEs = ((moonPhaseValue == 0) ? "Completa ": "") + "Luna Nueva";
        } else if (moonPhaseValue > 0.0625 && moonPhaseValue <= 0.1875) {
            // Waxing Crescent
            moonPhase.icon = '../../assets/1_waxing_crescent.png';
            moonPhase.phaseNameEng = "Waxing Crescent";
            moonPhase.phaseNameEs = "Luna Menguante";
        } else if (moonPhaseValue > 0.1875 && moonPhaseValue <= 0.3125) {
            // First Quarter
            moonPhase.icon = '../../assets/2_first_quarter.png';
            moonPhase.phaseNameEng = "First Quarter";
            moonPhase.phaseNameEs = "Cuarto Menguante";
        } else if (moonPhaseValue > 0.3125 && moonPhaseValue <= 0.4375) {
            // Waxing Gibbous
            moonPhase.icon = '../../assets/3_waxing_gibbous.png';
            moonPhase.phaseNameEng = "Waxing Gibbous";
            moonPhase.phaseNameEs = "Gibosa Menguante";
        } else if (moonPhaseValue > 0.4375 && moonPhaseValue <= 0.5625) {
            // Full Moon
            moonPhase.icon = '../../assets/4_full_moon.png';
            moonPhase.phaseNameEng = ((moonPhaseValue == 0.5) ? "Complete ": "") + "Full Moon";
            moonPhase.phaseNameEs = ((moonPhaseValue == 0.5) ? "Completa ": "") + "Luna Llena";
        } else if (moonPhaseValue > 0.5625 && moonPhaseValue <= 0.7375) {
            // Waning Gibbous
            moonPhase.icon = '../../assets/5_waning_gibbous.png';
            moonPhase.phaseNameEng = "Waning Gibbous";
            moonPhase.phaseNameEs = "Gibosa Creciente";
        } else if (moonPhaseValue > 0.7375 && moonPhaseValue <= 0.8125) {
            // Third Quarter
            moonPhase.icon = '../../assets/6_third_quarter.png';
            moonPhase.phaseNameEng = "Third Quarter";
            moonPhase.phaseNameEs = "Cuarto Creciente";
        } else if (moonPhaseValue > 0.8125 && moonPhaseValue <= 0.9375) {
            // Waning Crescent
            moonPhase.icon = '../../assets/7_waning_crescent.png';
            moonPhase.phaseNameEng = "Waning Crescent";
            moonPhase.phaseNameEs = "Luna Creciente";
        }
        return moonPhase;
    }

    setShowDetails(showDetails) {
        let shouldForceRender = (showDetails !== this.showDetails);
        this.showDetails = showDetails;
        if (shouldForceRender) {
            this.forceUpdate();
        }

    }

    setHoveredDay(dayIndex) {
        this.hoveredDay.summary = this.props.dailyData.data[dayIndex].summary;
        this.hoveredDay.sunriseTime = this.props.dailyData.data[dayIndex].sunriseTime;
        this.hoveredDay.sunsetTime = this.props.dailyData.data[dayIndex].sunsetTime;
        this.hoveredDay.moonPhase = this.getMoonPhase(this.props.dailyData.data[dayIndex].moonPhase);
        this.showDetails = true;
        this.forceUpdate();
    }

    render() {
        const nextDaysArray = this.props.dailyData.data;
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
                            Sunrise time {getFormattedTime(this.hoveredDay.sunriseTime)}
                        </span>
                    </div>
                    <div className="dusk">
                        <img src={chrome.runtime.getURL('../../assets/sunset.png')}/>
                        <span className="text">
                            Sunset time {getFormattedTime(this.hoveredDay.sunsetTime)}
                        </span>
                    </div>
                    <div className="moonphase">
                        <img src={chrome.runtime.getURL(this.hoveredDay.moonPhase.icon)}/>
                        <div className="text">
                            <div className="text-en">{this.hoveredDay.moonPhase.phaseNameEng}</div>
                            <div className="text-es">{this.hoveredDay.moonPhase.phaseNameEs}</div>
                        </div>


                    </div>
                </div>
                {/*: null }*/}

            </div>
        );
    }
}

WeatherNextDays.propTypes = {
    dailyData: PropTypes.shape({
        data: PropTypes.array
    })
};