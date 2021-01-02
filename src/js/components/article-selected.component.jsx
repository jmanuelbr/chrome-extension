import React, {Component} from "react";
import { connect } from 'react-redux';
import { updateSelectedArticle } from '../actions/configuration.actions';
import PropTypes from 'prop-types';

class ArticleSelected extends Component {
    constructor(props) {
        super(props);
        this.state = {
            article: this.props.article
        };
        this.setCurrentArticle = this.setCurrentArticle.bind(this);
    }
    setCurrentArticle(e) {
        e.preventDefault();
        const EMPTY_ARTICLE = {};
        this.props.updateSelectedArticle(EMPTY_ARTICLE);
    }

    render() {
        const {title, description} = this.props.article;
        return (
            <div className="article-selected"
            style={{'display': (title !== undefined)? 'block': 'none'}}>
                <div className="title-section">
                    <h2 dangerouslySetInnerHTML={{ __html: title }}></h2>
                    <img 
                        src={chrome.runtime.getURL("../assets/close-article.png")}
                        onClick={this.setCurrentArticle}/>
                </div>

                <div className="description-section"
                 dangerouslySetInnerHTML={{ __html: description }}></div>

            </div>
        );
    }   
}

const mapStateToProps = (state) => {
	return {
		article: state.configuration.articleSelected
	};
};

function mapDispatchToProps(dispatch) {
    return {
        updateSelectedArticle: article => dispatch(updateSelectedArticle(article))
    };
}

ArticleSelected.propTypes = {
    article: PropTypes.shape({
        title: PropTypes.string,
        description: PropTypes.string,
    }),
    updateSelectedArticle: PropTypes.func.isRequired
  };

export default connect(mapStateToProps, mapDispatchToProps)(ArticleSelected);