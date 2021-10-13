import * as CONSTANTS from "../constants";
let getMockData;
if (process.env.NODE_ENV === 'development') {
    getMockData = require('../mocks/currency.mocks').getMockData;
}
import { connect } from "react-redux";
import { FETCH_CONTENT } from "../actions/types";
import AbstractWidget from './abstract-widget.component';
import PropTypes from 'prop-types';

class CurrencyWidget extends AbstractWidget {
  constructor(props) {
    super(props);
    this.PROPERTIES = {
      feedUrl: "https://free.currconv.com/api/v7/convert?q=GBP_EUR&compact=ultra&apiKey=338efef6989e288b414c",
      needsJsonParse: true
    };
    this.state = {
      currencyRate: "Loading..."
    };
  }

  getValueFromData(feedData) {
    if (feedData && feedData.GBP_EUR) {
      return feedData.GBP_EUR;
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

CurrencyWidget.propTypes = {
  mocksEnabled: PropTypes.bool.isRequired
};

export default connect(mapStateToProps)(CurrencyWidget);
