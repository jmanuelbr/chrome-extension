import { Component } from 'react';
import {_startCase} from 'lodash/startCase';
import PropTypes from 'prop-types';

export default class SlashdotArticle extends Component {
    constructor (props) {
        super(props);
    }

    capitalizeFirstLetter(string) {
        if (string !== undefined) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        }
    }

    render() {
        let {title, link, thumbnail, comments, section} = this.props.articleData;
        section = this.capitalizeFirstLetter(section);
        return (
            <div className="slashdot-article">
                <a href={link} target="_blank" rel="noopener noreferrer">
                    <div className="thumbnail-container">
                        <img src={thumbnail}/>
                    </div>
                    <div className="info">
                        <ul>
                            <li className="section-title">
                                {section} section
                            </li>
                            <li>
                                <img className="comments-icon" 
                                     src={chrome.runtime.getURL('../assets/comments.png')}/>
                                <span className="comments-counter">{comments}</span>
                            </li>
                        </ul>

                    </div>
                    <p className="title">
                        {title}
                    </p>
                </a>
            </div>
        );
    }    
}

SlashdotArticle.propTypes = {
    articleData: PropTypes.shape({
        title: PropTypes.string,
        link: PropTypes.string,
        thumbnail: PropTypes.string,
        comments: PropTypes.number,
        section: PropTypes.string,
    })
};