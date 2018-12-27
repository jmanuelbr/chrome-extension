import React, { Component } from 'react';
import * as HELPER from '../helper';

export default class Article extends Component {
    constructor (props) {
        super(props);
      }

    render() {
        let date = this.props.date;
        return (
            <div className="article">
                <a href={ this.props.link } target="_blank">
                    <div className="thumbnail-container">
                        <img src={ this.props.thumbnail }/>
                    </div>
                    <p className="title">
                        { this.props.title }
                        {/* <span className="pub-date">{ date }</span> */}
                    </p>
                </a>
            </div>
        );
    }    
}