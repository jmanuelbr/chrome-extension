import React, { Component } from 'react';
import CurrencyWidget from './currencyWidget';
import Tabs from './tabs.component';
import BbcWidget from './bbc.component';
import LichessWidget from './lichess.component';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {active: 'aTab'};
      }

    render() {

        const content = {
            aTab: <BbcWidget/>,
            bTab: 'Tab B',
            cTab: 'Tab C',
            dTab: 'Tab D',
            eTab: 'Tab E',
            fTab: <LichessWidget/>,
          };
        const bbcImage = chrome.runtime.getURL('../assets/bbc-news.png');
        const theGuardianImage = chrome.runtime.getURL('../assets/theguardian.png');
        const slashdotImage = chrome.runtime.getURL('../assets/slashdot.png');
        const scienceImage = chrome.runtime.getURL('../assets/science.png');
        const redditImage = chrome.runtime.getURL('../assets/reddit.png');
        const lichessImage = chrome.runtime.getURL('../assets/lichess.png');

        return(

            <div>
                <CurrencyWidget/>
                <div className="tabs-section">
                    <Tabs
                        active={this.state.active}
                        onChange={active => this.setState({active})}
                        >
                        <img src={bbcImage} key="aTab"/>
                        <img src={theGuardianImage} key="bTab"/>
                        <img src={slashdotImage} key="cTab"/>
                        <img src={scienceImage} key="dTab"/>
                        <img src={redditImage} key="eTab"/>
                        <img src={lichessImage} key="fTab"/>
                    </Tabs>
                    <div className="tab-container">
                        {content[this.state.active]}
                    </div>    
                </div>
            </div>
        )
    }
}