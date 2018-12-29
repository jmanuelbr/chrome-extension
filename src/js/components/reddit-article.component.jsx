import React, { Component } from 'react';
import _isEmpty from 'lodash/isEmpty';

export default class RedditArticle extends Component {
    constructor (props) {
        super(props);
    }

    render() {
        if(this.props.article.thumbnail.match(/^(self|spoiler|default)$/)) {
            this.props.article.thumbnail = chrome.runtime.getURL('../assets/reddit-article.png');
        }
        const article = this.props.article;
        return (
            <div className="reddit-article">
                <a href={ 'https://www.reddit.com/' + article.permalink } target="_blank">
                    <div className="votes">
                    <ul>
                        <li>
                            <img src={chrome.runtime.getURL('../assets/reddit-score.png')}/> 
                            <span className='score-counter'>{article.score}</span>    
                        </li>
                        <li>
                            <img src={chrome.runtime.getURL('../assets/reddit-comments.png')}/> 
                            <span className='comments-counter'>{article.num_comments}</span>
                        </li>
                    </ul>
                    </div>
                    <div className="thumbnail-container">
                        <img src={ article.thumbnail } 
                            height={article.thumbnail_height} 
                            width={article.thumbnail_width}/>
                    </div>
                    <p className="title">
                        { article.title }
                    </p>
                </a>
            </div>
        );
    }    
}