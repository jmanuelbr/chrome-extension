import React, { Component } from 'react';
import _isEmpty from 'lodash/isEmpty';

export default class RedditArticle extends Component {
    constructor (props) {
        super(props);
    }
    getThumbnail(thumbnail) {
        if (_isEmpty(thumbnail)) {
            thumbnail = chrome.runtime.getURL('../assets/reddit-article.png');
        }
        return thumbnail;
    }


    render() {
        if (this.props.article.thumbnail === "self" || this.props.article.thumbnail === "spoiler") {
            this.props.article.thumbnail = chrome.runtime.getURL('../assets/reddit-article.png');
        }
        return (
            <div className="reddit-article">
                <a href={ this.props.article.url } target="_blank">
                    <div className="votes">
                    Up: {this.props.article.ups}
                    Down: {this.props.article.downs}
                    </div>
                    <div className="thumbnail-container">
                        <img src={ this.props.article.thumbnail } 
                            height={this.props.article.thumbnail_height} 
                            width={this.props.article.thumbnail_width}/>
                    </div>
                    <p className="title">
                        { this.props.article.title }
                    </p>
                </a>
            </div>
        );
    }    
}