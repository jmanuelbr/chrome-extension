import React, { Component } from "react";
import Tabs from "./tabs.component";
import LichessWidget from "./lichess.component";
import TheGuardianWidget from "./theguardian.component";
import CurrencyWidget from "./currency.component";
import RedditWidget from "./reddit/reddit.component";
import ElpaisWidget from "./elpais.component";
import SlashdotWidget from "./slashdot/slashdot.component";
import WeatherWidget from "./weather/weather.component";
import TflWidget from "./tfl/tfl.component";
import _map from "lodash/map";
import { Provider } from "react-redux";
import HuffPostWidget from "./huffpost.component";
import ContractorUKWidget from "./contractor-uk.component";
import { OPEN_OPTIONS_PAGE } from "../actions/types";
// import AsWidget from "./as.component";
// import BbcWidget from "./bbc.component";
// import EldiarioWidget from "./eldiario.component";
// import ElMundoWidget from "./elmundo.component";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { active: 0 };
  }

  render() {
    const tabsContent = [
      {
        widget: <TheGuardianWidget />,
        icon: chrome.runtime.getURL("../assets/theguardian.png")
      },
      {
        widget: <HuffPostWidget />,
        icon: chrome.runtime.getURL("../assets/huffpost.png")
      },
      {
        widget: <ElpaisWidget />,
        icon: chrome.runtime.getURL("../assets/elpais.png")
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
        widget: <RedditWidget />,
        icon: chrome.runtime.getURL("../assets/reddit.png")
      },
      {
        widget: <TflWidget />,
        icon: chrome.runtime.getURL("../assets/tfl.png")
      },
      {
        widget: <LichessWidget />,
        icon: chrome.runtime.getURL("../assets/lichess.png")
      }
      // {
      //   widget: <BbcWidget />,
      //   icon: chrome.runtime.getURL("../assets/bbc-news.png")
      // },
      // { 
      //   "widget": <EldiarioWidget/>, 
      //   "icon": chrome.runtime.getURL('../assets/eldiario.png')
      // },
      // {
      //   widget: <ElMundoWidget />,
      //   icon: chrome.runtime.getURL("../assets/elmundo.png")
      // },
      // {
      //   widget: <AsWidget />,
      //   icon: chrome.runtime.getURL("../assets/as.png")
      // },
    ];

    this.openOptionsPage = () => {
      chrome.runtime.sendMessage(
        { contentScriptQuery: OPEN_OPTIONS_PAGE }, 
        null);
    };
    
    return (
      <Provider store={this.props.store}>
        <div>
          <button className="options-button" onClick={this.openOptionsPage}>
              <img
                src={chrome.runtime.getURL("../assets/options.png")}
              />
          </button>
          <CurrencyWidget />
          <WeatherWidget />
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
        </div>
      </Provider>
    );
  }
}
