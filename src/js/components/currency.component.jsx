import React, { Component } from 'react';
import axios from 'axios';
import * as CONSTANTS from '../constants';

export default class CurrencyWidget extends Component {
    constructor (props) {
        super(props);
        this.state = {
			currencyRate: 'N/A'
		};
      }
      componentDidMount() {
        let self = this;
		// axios.get(CONSTANTS.CURRENCY_FEED).then(function(response) {
        //     const currencyRate = response.data.GBP_EUR.val;
        //     self.setState(state => {
        //         state.currencyRate = currencyRate;
        //         return state;
        //       });
        // })
        // .catch((error) => {
        //     console.log('Error fetching currency feed data', error);
        // });
	}
    render() {
        const image = chrome.runtime.getURL("../assets/currency.png");
        const currencyRate = this.state.currencyRate;
        
        return (
            <div className="currency-section">
                <div className='widget-table'>
                    <div className="currency-image">
                        <a href={CONSTANTS.CURRENCY_URL} target="_blank">
                            <img className="ukeur--logo--margin" src={image} height="20px"/>
                        </a>
                    </div>
                    <div className="currency-text">GBP/EUR</div>
                    <div className="currency-text currency-value">{currencyRate}</div>
                </div>
            </div>
        );
    }
}