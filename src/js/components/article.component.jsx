import React, { Component } from 'react';

export default class Article extends Component {
    constructor (props) {
        console.log('props', props);
        super(props);
      }
     
    render() {
        return (
            <div className="article">
                <a href={ this.props.link } target="_blank">
                    <div className="thumbnail-container">
                        <img src={ this.props.thumbnail }/>
                    </div>
                    <p className="title">
                        { this.props.title }
                        <span className="pub-date">{ this.props.link }</span>
                    </p>
                </a>
            </div>
        );
    }

    
}