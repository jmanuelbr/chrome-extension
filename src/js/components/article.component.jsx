import React, { Component } from 'react';

export default class Article extends Component {
    constructor (props) {
        super(props);
    }

    render() {
        const {title, link, thumbnail} = this.props.articleData;
        return (
            <div className="article">
                <a href={link} target="_blank">
                    <div className="thumbnail-container">
                        <img src={thumbnail}/>
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