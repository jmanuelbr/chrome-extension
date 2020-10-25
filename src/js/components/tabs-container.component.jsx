import React, { Component } from 'react';
import Tabs from "./tabs.component";
import _map from "lodash/map";
import TheGuardianWidget from "./theguardian.component";
import ElpaisWidget from "./elpais.component";
import ContractorUKWidget from "./contractor-uk.component";
import SlashdotWidget from "./slashdot/slashdot.component";
import TflWidget from "./tfl/tfl.component";
import RedditWidget from './reddit/reddit.component';
import NewYorkTimesScienceWidget from './nytimes-science.component';
import NewYorkTimesWidget from './nytimes.component';
import EuropaPressWidget from './europapress.component';

export default class TabsContainerWidget extends Component {
    constructor(props) {
      super(props);
      this.state = { active: '0' };
    }

    render() {
        const tabsContent = [
            {
              widget: <TheGuardianWidget />,
              icon: chrome.runtime.getURL("../assets/theguardian.png")
            },
            // {
            //   widget: <NewYorkTimesWidget />,
            //   icon: chrome.runtime.getURL("../assets/nytimes.png")
            // },
            {
              widget: <ElpaisWidget />,
              icon: chrome.runtime.getURL("../assets/elpais.png")
            },
            {
              widget: <EuropaPressWidget />,
              icon: chrome.runtime.getURL("../assets/europapress.png")
            },
            
            {
              widget: <ContractorUKWidget />,
              icon: chrome.runtime.getURL("../assets/contractor-uk.png")
            },
            {
              widget: <SlashdotWidget />,
              icon: chrome.runtime.getURL("../assets/slashdot.png")
            },
            {
              widget: <NewYorkTimesScienceWidget/>,
              icon: chrome.runtime.getURL("../assets/nytimes-science.png")
            },
            {
              widget: <RedditWidget />,
              icon: chrome.runtime.getURL("../assets/reddit.png")
            },
            {
              widget: <TflWidget />,
              icon: chrome.runtime.getURL("../assets/tfl.png")
            }
          ];

        return (
            <div className="tabs-section">
            <Tabs
              active={this.state.active}
              onChange={active => this.setState({ active })}
            >
              {_map(tabsContent, (tabContent, i) => (
                <img src={tabContent.icon} key={i} />
              ))}
            </Tabs>
            {_map(tabsContent, (tabContent, i) => (
              <div
                className="tab-container"
                key={i}
                style={{ display: this.state.active == i ? "block" : "none" }}
              >
                {tabContent.widget}
              </div>
            ))}
          </div>
        );
    }
}
