import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateSelectedArticle } from '../actions/configuration.actions';

class Article extends Component {
    constructor (props) {
        super(props);
        this.setCurrentArticle = this.setCurrentArticle.bind(this);
    }

    setCurrentArticle(e) {
        e.preventDefault();
        this.props.updateSelectedArticle(this.props.articleData);
    }

    render() {
        const {title, link, thumbnail} = this.props.articleData;
        let cssThumbnail = "";
        if (this.props.css) { // Custom CSS for some articles
            cssThumbnail = this.props.css.cssThumbnail;
        }

        return (
            <React.Fragment>
                <div className="article">
                    <a href={link} target="_blank" rel="noopener noreferrer">
                        <div className={`thumbnail-container ${cssThumbnail}`}>
                            <img src={thumbnail}/>
                        </div>
                    </a>
                    <div className="title"
                        dangerouslySetInnerHTML={{ __html: title }}
                        onClick={this.setCurrentArticle}>
                    </div>
                    
                </div>
            </React.Fragment>
        );
    }    
}

Article.propTypes = {
    articleData: PropTypes.object.isRequired,
    css: PropTypes.object,
    updateSelectedArticle: PropTypes.func
};

function mapDispatchToProps(dispatch) {
    return {
        updateSelectedArticle: article => dispatch(updateSelectedArticle(article))
    };
}

export default connect(null, mapDispatchToProps)(Article);