import React, { Component } from 'react';
import axios from 'axios';
import * as CONSTANTS from '../constants';

export default class BbcWidget extends Component {
    constructor (props) {
        super(props);
      }
      componentDidMount() {
        let self = this;
        const script = document.createElement("script");

        script.src = "https://lichess.org/tv/embed?theme=auto&bg=auto";
        script.async = true;

        document.body.appendChild(script);
	
	}
    render() {
        // const image = chrome.runtime.getURL("../../assets/currency-feed.png");
        
        return (
            <div className="bbc-news">
                <h1>bbc</h1>
            </div>
        );
    }

    
}