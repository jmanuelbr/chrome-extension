import React from "react";
import * as CONSTANTS from "../constants";
import { getMockData } from "../mocks/currency.mocks";
import { connect } from "react-redux";
import { FETCH_CONTENT } from "../actions/types";
import AbstractWidget from './abstract-widget.component';

class CurrencyWidget extends AbstractWidget {
  constructor(props) {
    super(props);
    this.PROPERTIES = {
      feedUrl: "http://spreadsheets.google.com/feeds/list/0Av2v4lMxiJ1AdE9laEZJdzhmMzdmcW90VWNfUTYtM2c/5/public/basic?alt=json",
      needsJsonParse: true
    };
    this.state = {
      currencyRate: "N/A"
    };
  }

  getValueFromData(feedData) {
    for (let i = 0; i < feedData.feed.entry.length; i += 1) {
      const entry = feedData.feed.entry[i];

      if (entry.title.$t === "EUR") {
        return entry.content.$t.replace("_cokwr: ", "");
      }
    }
    return "N/A";
  }

  // Overrides
  processData(feedData) {
    this.setState(state => {
      try {
        state.currencyRate = this.getValueFromData(feedData);
      } catch (exception) {
        state.currencyRate = "¯\\_(ツ)_/¯";
        console.log("EXCEPTION", exception);
      }
      return state;
    });
  };

  componentDidMount() {
    if (this.props.mocksEnabled) {
      this.processData(getMockData());
    } else {
      chrome.runtime.sendMessage(
        { contentScriptQuery: FETCH_CONTENT, properties: this.PROPERTIES},
        feedData => this.processData(feedData));
    }
  }

  render() {
    const image = chrome.runtime.getURL("../assets/currency.png");
    const currencyRate = this.state.currencyRate;

    return (
      <div className="currency-section">
        <div className="widget-table">
          <div className="currency-image">
            <a href={CONSTANTS.CURRENCY_URL} target="_blank" rel="noopener noreferrer">
              <img className="ukeur--logo--margin" src={image} height="20px" />
            </a>
          </div>
          <div className="currency-text">GBP/EUR</div>
          <div className="currency-text currency-value">{currencyRate}</div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    mocksEnabled: state.configuration.mocksEnabled
  };
}

export default connect(mapStateToProps)(CurrencyWidget);
