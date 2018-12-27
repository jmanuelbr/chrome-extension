import React, { Component } from 'react';
import axios from 'axios';
import * as CONSTANTS from '../constants';
import * as HELPER from '../helper';

export default class BbcWidget extends Component {
    constructor (props) {
        super(props);
        this.state = {
			content: 'No news today :('
		};
      }
      componentDidMount() {
        let self = this;
        var convert = require('xml-js');
        axios.get(CONSTANTS.BCC_NEWS_FEED).then(function(response) {
            console.log('Data', response.data);
            var jsonData = convert.xml2json(response.data, {compact: false, spaces: 4});
            console.log(HELPER.parseFeed(jsonData));
            // const currencyRate = response.data.GBP_EUR.val;
            // self.setState(state => {
            //     state.currencyRate = currencyRate;
            //     return state;
            //   });
        })
        .catch((error) => {
            console.log('Error fetching BBC news feed data', error);
        });
	
	}
    render() {
        return (
            <div className="bbc-news">
                <h1>bbc</h1>
            </div>
        );
    }

    
}