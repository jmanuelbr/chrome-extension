import React, { Component } from 'react';
import TflStatus from './tfl-status.component';
import _map from 'lodash/map';
import LoaderTabs from '../loader/loader-tabs.component';
import Error from '../error.component';
import { connect } from 'react-redux';
import { getMockData } from '../../mocks/tfl-tube.mocks';
import { FETCH_CONTENT } from '../../actions/types';


export class TflTube extends Component {
    constructor (props) {
        super(props);
        this.state = {
            contentReady: false,
            tubeData: {},
            error: false
        };
    }

    processData = function(feedData) {
        const self = this;
        try {
            self.setState(state => {
                state.tubeData = feedData[0];
                state.contentReady = true;
                return state;
            });
        }
        catch(exception) {
            state.error = true;
            return state;
        }
    }

    componentDidMount() {
        if (this.props.mocksEnabled) {
            this.processData(getMockData())
        }
        else {
            chrome.runtime.sendMessage(
                { contentScriptQuery: FETCH_CONTENT, itemId: "tfl-tube" }, 
                feedData => this.processData(feedData));
        }
    }


    render() {
        const {disuption, statusSeverityDescription, reason} = this.state.tubeData;

        if (!this.state.contentReady) {
            return (
                <LoaderTabs/>
            );
        }
        else if (this.state.error) {
            return (
                <Error/>
            );
        }
        else {
            return (
                    <div className="tfl-tube-container">
                    <div className="name">
                        {this.state.tubeData.name}
                    </div>
                    <div className="status">
                        {_map(this.state.tubeData.lineStatuses, (status, i) => (
                            <TflStatus
                                key={i}
                                status={status}
                            />
                        ))}
                    </div>
                </div>
            );
        }
    }    
}
function mapStateToProps(state) {
	return {
		mocksEnabled: state.configuration.mocksEnabled
	};
}

export default connect(mapStateToProps)(TflTube);
