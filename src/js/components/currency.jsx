import * as CONSTANTS from '../constants';
import axios from 'axios';
import $ from 'jquery';
import React, { Component } from 'react';

export const  currencyWidget = '<div class="currency-section" id="currency-table"></div>';

export const currencyRequest = () => {
    axios.get(CONSTANTS.GBP_EUR_CHART).then(function(response) {
        const currencyRate = response.data.GBP_EUR.val;
        const currencyTable =
            '<div class="widget-table">' +
            '<div class="currency-image">' +
                '<a href="https://www.xe.com/currencyconverter/convert/?Amount=1&From=GBP&To=EUR" target="_blank">' +
                    '<img class="ukeur--logo--margin" src="' + chrome.extension.getURL('assets/currency-feed.png') + '"/>' +
                '</a>' +
            '</div>' +
            '<div class="currency-text">GBP/EUR</div>' +
            '<div class="currency-text currency-value">' + currencyRate + '</div>' +
            '</div>';
        $('#currency-table').append(currencyTable);
    })
    .catch((error) => {
        console.log('Error fetching Currency feed 2', error);
    });
};

export default class CurrencyWidget extends Component {
    return (
        <div className='widget-table'>
            <div className='currency-image'>
                <a href='https://www.xe.com/currencyconverter/convert/?Amount=1&From=GBP&To=EUR' target='_blank'>
                    <img className='ukeur--logo--margin src="' chrome.extension.getURL('assets/currency-feed.png') '" height="20px"/>
                </a>
            </div>
            <div className="currency-text"></div>
            <div className="currency-text currency-value"> + currencyRate + </div>
        </div>
    );  
}