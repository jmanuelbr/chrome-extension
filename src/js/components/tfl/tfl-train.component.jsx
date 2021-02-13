import { connect } from "react-redux";
import AbstractWidget from '../abstract-widget.component';
import PropTypes from 'prop-types';
import NationalRailLiveDepartures from './nationalrail-live-departures.component';

class TflTrain extends AbstractWidget {
  constructor(props) {
    super(props);
  }

  render() {
      return (
        <div className="tfl-train-container">
          <div className="header">
            <img
              className="logo"
              src={chrome.runtime.getURL("../assets/national-rail.png")}
            />
            <div className="title">National Rail</div>
          </div>
          <NationalRailLiveDepartures/>
        </div>
      );
  }
}

function mapStateToProps(state) {
  return {
    mocksEnabled: state.configuration.mocksEnabled
  };
}

TflTrain.propTypes = {
  mocksEnabled: PropTypes.bool.isRequired
};

export default connect(mapStateToProps)(TflTrain);
