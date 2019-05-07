import React, { Component } from 'react';

import _isEmpty from 'lodash/isEmpty';
import TflTube from './tfl-tube.component';
import TflBus from './tfl-bus.component';


export default class TflWidget extends Component {
    constructor(props) {
        super(props);
    }

    
    render() {
        return (
            <div className="tfl-container">
                <TflBus/>
                <hr/>
                <TflTube/>
            </div>
        )
    }
}