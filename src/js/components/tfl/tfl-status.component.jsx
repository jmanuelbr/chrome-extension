import React, { Component } from 'react';

export default class TflDisruption extends Component {
    constructor (props) {
        super(props);
    }

    render() {
        const {disuption, statusSeverityDescription, reason} = this.props.status;
        return (
            <div className="disruption">
                
                <div className="reason">
                    <div className="title">
                        {statusSeverityDescription}
                    </div>
                    <div className="text">
                        <p>
                            {reason}
                        </p>
                    </div>
                    
                </div>
            </div>
        );
    }    
}