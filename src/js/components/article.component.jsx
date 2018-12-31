import React, { Component } from 'react';

export default class Article extends Component {
    constructor (props) {
        super(props);
    }

    render() {
        // TODO: implement description and d
        const {title, description, link, thumbnail, date} = this.props.articleData;
        return (
            <div className="article">
                <a href={link} target="_blank">
                    <div className="thumbnail-container">
                        <img src={thumbnail}/>
                    </div>
                    <p className="title">
                        {title}
                    </p>
                </a>
            </div>
        );
    }    
}