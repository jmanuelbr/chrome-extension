import { Component } from 'react';

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
                <TflTube/>
                <TflBus/>
            </div>
        );
    }
}