import React, { Component } from 'react';
import * as CONSTANTS from '../constants';

export default class CurrencyWidget extends Component {
    constructor (props) {
        super(props);
        this.state = {
            currencyRate: 'N/A',
            error: false
		};
      }

    processData = function(feedData) {
        const self = this;
        try {
            self.setState(state => {
                if (feedData.currency !== undefined) {
                    state.currencyRate = feedData.currency[0].value;
                }
                return state;
            });
        } 
        catch (exception) {
            console.log('EXCEPTION', exception);
        }
    }

      componentDidMount() {
        chrome.runtime.sendMessage(
            {contentScriptQuery: "fetchCurrency"}, feedData => this.processData(feedData));
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