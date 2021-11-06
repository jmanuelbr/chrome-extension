import {Component, Fragment} from 'react';
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

    isAnImage(url) {
        return(url && url.match(/\.(jpeg|jpg|gif|png)$/) != null);
    }

    articleMedia(props) {
        if (props.video !== undefined && props.video.length > 1) {
            return (
                <video width="245" height="150" controls>
                    <source src={props.video} type="video/mp4"/>
                </video>);
        }
        else {
            props.thumbnail = (this.isAnImage(props.thumbnail)) ?
                props.thumbnail : chrome.runtime.getURL("../assets/no_photo_available.png");
            return (<img src={props.thumbnail}/>);
        }
    } 
    render() {
        let {title, link, thumbnail, hasUpdates} = this.props.articleData;
        if (hasUpdates) {
            title = "🆕 " + title;
        }
        let cssThumbnail = "";
        if (this.props.css) { // Custom CSS for some articles
            cssThumbnail = this.props.css.cssThumbnail;
        }

        return (
            <Fragment>
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
            </Fragment>
        );
    }    
}

Article.propTypes = {
    articleData: PropTypes.shape({
        title: PropTypes.string.isRequired,
        link: PropTypes.string,
        thumbnail: PropTypes.string,
        hasUpdates: PropTypes.bool
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