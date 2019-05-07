import React, { Component } from 'react';
import TflStatus from './tfl-status.component';
import _map from 'lodash/map';
import LoaderTabs from '../loader/loader-tabs.component';
import Error from '../error.component';

export default class TflTube extends Component {
    constructor (props) {
        super(props);
        this.state = {
            contentReady: false,
            tubeData: {},
            error: false
        };
    }

    processTubeData = function(feedData) {
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
        chrome.runtime.sendMessage(
            {contentScriptQuery: "fetchContent", itemId: "tfl-tube"}, feedData => this.processTubeData(feedData));
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