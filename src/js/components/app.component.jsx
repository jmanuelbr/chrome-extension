import React, { Component } from "react";
import { Provider } from "react-redux";
import { OPEN_OPTIONS_PAGE } from "../actions/types";
import CurrencyWidget from "./currency.component";
import WeatherWidget from "./weather/weather.component";
import TabsContainerWidget  from './tabs-container.component';
import ArticleSelected from "./article-selected.component";
import PropTypes from 'prop-types';
import MapComponent from "./map.component";

export default class App extends Component {
  constructor(props) {
    super(props);
      this.mapOpen = false;
  }

  render() {
    this.openOptionsPage = () => {
      chrome.runtime.sendMessage(
        { contentScriptQuery: OPEN_OPTIONS_PAGE },
        null);
    };
    this.toggleMapOverlay = () => {
        document.getElementById("plugin-map").style.visibility = (this.mapOpen) ? "hidden" : "visible";
        this.mapOpen = !this.mapOpen;
    };
    const {chromeStorage} = this.props.store;

    return (
        <Provider store={this.props.store}>
            <button className="map-button" onClick={this.toggleMapOverlay}>
                <img
                  src={chrome.runtime.getURL("../assets/google-maps.png")}
                />
            </button>
            <button className="options-button" onClick={this.openOptionsPage}>
                <img
                src={chrome.runtime.getURL("../assets/settings-icon.png")}
                />
            </button>
            <ArticleSelected/>
            <CurrencyWidget />
            <WeatherWidget chromeStorage={chromeStorage}/>
            <TabsContainerWidget/>
            <MapComponent/>
        </Provider>
    );
  }
}

App.propTypes = {
  store: PropTypes.shape({
    chromeStorage: PropTypes.object
  })
};
