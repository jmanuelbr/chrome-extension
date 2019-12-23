import React, { Component } from "react";
import _map from "lodash/map";
import { Provider } from "react-redux";
import { OPEN_OPTIONS_PAGE } from "../actions/types";
import CurrencyWidget from "./currency.component";
import WeatherWidget from "./weather/weather.component";
import TabsContainerWidget  from './tabs-container.component';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    this.openOptionsPage = () => {
      chrome.runtime.sendMessage(
        { contentScriptQuery: OPEN_OPTIONS_PAGE }, 
        null);
    };
    
    return (
      <Provider store={this.props.store}>
          <button className="options-button" onClick={this.openOptionsPage}>
              <img
                src={chrome.runtime.getURL("../assets/options.png")}
              />
          </button>
          <CurrencyWidget />
          <WeatherWidget />
          <TabsContainerWidget/>
      </Provider>
    );
  }
}
