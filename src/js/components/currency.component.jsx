import React, { Component } from 'react';
import * as CONSTANTS from '../constants';
import { FETCH_CURRENCY } from '../actions/types';

export default class CurrencyWidget extends Component {
    constructor (props) {
        super(props);
        this.state = {
            currencyRate: 'N/A',
            error: false
		};
      }

    processData = function(feedData) {
        this.setState(state => {
            try {
                state.currencyRate = feedData.currency[0].value;
            }
            catch(exception) {
                state.currencyRate = "¯\\_(ツ)_/¯";
                console.log('EXCEPTION', exception);
            }
            return state;
        });
       
    }

      componentDidMount() {
        // TODO: implement mocks for this
        chrome.runtime.sendMessage(
            { contentScriptQuery: FETCH_CURRENCY }, 
            feedData => this.processData(feedData));
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