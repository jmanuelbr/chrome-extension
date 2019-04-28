import React, { Component } from 'react';

export default class Error extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="error-container">
                <img src={chrome.runtime.getURL('../assets/error.png')}/>
            </div>
        );
    }
}