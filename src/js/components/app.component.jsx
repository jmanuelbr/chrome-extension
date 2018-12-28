import React, { Component } from 'react';
import Tabs from './tabs.component';
import BbcWidget from './bbc.component';
import LichessWidget from './lichess.component';
import TheGuardianWidget from './theguardian.component';
import CurrencyWidget from './currency.component';
import _map from 'lodash/map';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {active: 0};
      }

    render() {
        const tabsContent = [
            { "widget": <BbcWidget/>, "icon": chrome.runtime.getURL('../assets/bbc-news.png')},
            { "widget": <TheGuardianWidget/>, "icon": chrome.runtime.getURL('../assets/theguardian.png')},
            { "widget": 'Slashdot Widget', "icon": chrome.runtime.getURL('../assets/slashdot.png')},
            { "widget": 'Science Widget', "icon": chrome.runtime.getURL('../assets/science.png')},
            { "widget": 'Reddit Widget', "icon": chrome.runtime.getURL('../assets/reddit.png')},
            { "widget": <LichessWidget/>, "icon": chrome.runtime.getURL('../assets/lichess.png')}
        ];
        return(

            <div>
                <CurrencyWidget/>
                <div className="tabs-section">
                    <Tabs
                        active={this.state.active}
                        onChange={active => this.setState({active})}
                        >
                        {_map(tabsContent, (tabContent, i) => (
                            <img src={tabContent.icon} key={i}/>
                        ))}
                    </Tabs>
                        {_map(tabsContent, (tabContent, i) => (
                            <div className="tab-container" key={i} style={{'display': (this.state.active == i) ? 'block' : 'none' }}>
                                { tabContent.widget }
                            </div> 
                        ))}
                </div>
            </div>
        )
    }
}