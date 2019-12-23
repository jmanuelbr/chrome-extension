import React, { Component } from 'react';

export default class Article extends Component {
    constructor (props) {
        super(props);
    }

    render() {
        const {description, link, thumbnail} = this.props.articleData;
        let {title} = this.props.articleData;
        let cssThumbnail = "";
        if (this.props.css) { // Tailor made CSS for article
            cssThumbnail = this.props.css.cssThumbnail;
        }
        title += "<span class='toggle-description'> ➡️</span>";

        return (
            <React.Fragment>
                {/* <div className="description"
                    dangerouslySetInnerHTML={{ __html: description }}>
                </div> */}
                <div className="article">
                    <a href={link} target="_blank" rel="noopener noreferrer">
                        <div className={`thumbnail-container ${cssThumbnail}`}>
                            <img src={thumbnail}/>
                        </div>
                    </a>
                    <p className="title"
                        dangerouslySetInnerHTML={{ __html: title }}>
                    </p>
                </div>
            </React.Fragment>
        );
    }    
}