import React, { Component } from 'react';

export default class Article extends Component {
    constructor (props) {
        super(props);
    }

    render() {
        const {title, link, thumbnail} = this.props.articleData;
        let cssThumbnail = "";
        if (this.props.css) { // Tailor made CSS for article
            cssThumbnail = this.props.css.cssThumbnail;
        }

        return (
            <div className="article">
                <a href={link} target="_blank">
                    <div className={`thumbnail-container ${cssThumbnail}`}>
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