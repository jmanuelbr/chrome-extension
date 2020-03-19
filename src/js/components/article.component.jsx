import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateSelectedArticle } from '../actions/configuration.actions';
import PropTypes from 'prop-types';

class Article extends Component {
    constructor (props) {
        super(props);
        this.setCurrentArticle = this.setCurrentArticle.bind(this);
    }

    setCurrentArticle(e) {
        e.preventDefault();
        this.props.updateSelectedArticle(this.props.articleData);
    }

    articleMedia(props) {
        console.log('asdf',props);
        if (props.video !== undefined && props.video.length > 1) {
            console.log('get video');
            return (
                <video width="245" height="150" controls>
                  <source src={props.video} type="video/mp4"/>
                 </video>);
        }
        else {
            return (<img src={props.thumbnail}/>);
        }
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
                            {this.articleMedia(this.props.articleData)}
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
    articleData: PropTypes.shape({
        title: PropTypes.string.isRequired,
        link: PropTypes.string,
        thumbnail: PropTypes.string
    }),
    css: PropTypes.object,
    updateSelectedArticle: PropTypes.func.isRequired
};

function mapDispatchToProps(dispatch) {
    return {
        updateSelectedArticle: article => dispatch(updateSelectedArticle(article))
    };
}

export default connect(null, mapDispatchToProps)(Article);