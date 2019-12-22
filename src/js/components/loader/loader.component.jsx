import React, { Component } from 'react';

export default class Loader extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="spinner-container">
                <svg className="spinner" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
                    <circle className="path" fill="none" strokeWidth="6" strokeLinecap="round" cx="33" cy="33" r="30"></circle>
                </svg>
            </div>
        );
    }
}