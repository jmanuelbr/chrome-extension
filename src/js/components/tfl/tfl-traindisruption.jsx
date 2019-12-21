import React, { Component } from 'react';

export default class TflTrainDisruption extends Component {
    constructor (props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <div className="train-disruption">
                    <div className="category">
                        {this.props.data.category}
                    </div>
                    <div className="description">
                        {this.props.data.description}
                    </div>
                </div>
                <hr/>
            </React.Fragment>
        );
    }    
}