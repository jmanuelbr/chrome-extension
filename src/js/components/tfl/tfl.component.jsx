import React, { Component } from 'react';

import _isEmpty from 'lodash/isEmpty';
import TflTube from './tfl-tube.component';
import TflBus from './tfl-bus.component';
import TflTrain from './tfl-train.component';


export default class TflWidget extends Component {
    constructor(props) {
        super(props);
    }

    
    render() {
        return (
            <div className="tfl-container">
                <TflTrain/>
                <hr/> 
                <TflTube/>
                <hr/>
                <TflBus/>
            </div>
        );
    }
}