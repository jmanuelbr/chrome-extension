import React, { Component } from 'react';

export default class RedditArticle extends Component {
    constructor (props) {
        super(props);
    }

    render() {
        if(this.props.articleData.thumbnail.match(/^(self|spoiler|default)$/)) {
            this.props.articleData.thumbnail = chrome.runtime.getURL('../assets/reddit-article.png');
        }

        const {permalink, score, num_comments, thumbnail, thumbnail_height, thumbnail_width, title} = this.props.articleData;
        return (
            <div className="reddit-article">
                <a href={'https://www.reddit.com/' + permalink} target="_blank">
                    <div className="votes">
                    <ul>
                        <li>
                            <img src={chrome.runtime.getURL('../assets/reddit-score.png')}/> 
                            <span className='score-counter'>{score}</span>    
                        </li>
                        <li>
                            <img src={chrome.runtime.getURL('../assets/comments.png')}/> 
                            <span className='comments-counter'>{num_comments}</span>
                        </li>
                    </ul>
                    </div>
                    <div className="thumbnail-container">
                        <img src={thumbnail} 
                            height={thumbnail_height} 
                            width={thumbnail_width}/>
                    </div>
                    <p 
                        className="title" 
                        dangerouslySetInnerHTML={{ __html: title }}>
                    </p>
                </a>
            </div>
        );
    }    
}