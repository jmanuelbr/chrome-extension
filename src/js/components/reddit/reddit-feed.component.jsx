import React from 'react';
import RedditArticle from './reddit-article.component';
import _map from 'lodash/map';
import LoaderTabs from '../loader/loader-tabs.component';
import Error from '../error.component';
import _isEmpty from 'lodash/isEmpty';
import { connect } from 'react-redux';
import { getMockData } from '../../mocks/reddit.mocks';
import { FETCH_CONTENT } from '../../actions/types';
import AbstractWidget from '../abstract-widget.component';
import PropTypes from 'prop-types';

class RedditFeed extends AbstractWidget {
    constructor(props) {
        super(props);
        this.PROPERTIES = {
            feedUrl: this.props.feedUrl + "?t=" + this.props.period,
            needsJsonParse: true
        };
        this.state = {
            articles: [],
            loading: false,
            error: true
        };
        this.update = false;
        this.alreadyUpdated = false;
    }

    getArticles(feedData) {
        try {
            const data = feedData.data.children;
            var list = [];
            Object.values(data).map(element => {
                    list.push(element.data);   
            });
        }
        catch (exception) {
            super.loading(false);
            console.error('*** EXCEPTION RedditFeed component (I could not parse all articles) -> ', exception);
        }
       
        return list;
    }

    // Overrides
    processData(feedData) {
        const self = this;
        self.setState(state => {
            state.articles = self.getArticles(feedData);
            state.loading = true;
            if (!_isEmpty(state.articles)) {
                state.error = false;
            }
            return state;
        });
    }

    componentDidMount() {
        if (this.props.mocksEnabled) {
            this.processData(getMockData());
        }
        else {
            chrome.runtime.sendMessage(
                { contentScriptQuery: FETCH_CONTENT, properties: this.PROPERTIES},
                feedData => this.processData(feedData));
        }
    }
    componentDidUpdate() {
        this.PROPERTIES.feedUrl = this.props.feedUrl + "?t=" + this.props.period;
        this.update = this.props.updateComponent;
        if (this.update && !this.alreadyUpdated) {
            this.alreadyUpdated = true;
            if (this.props.mocksEnabled) {
                this.processData(getMockData());
            }
            else {
                chrome.runtime.sendMessage(
                    { contentScriptQuery: FETCH_CONTENT, properties: this.PROPERTIES},
                    feedData => this.processData(feedData, this.alreadyUpdated));
            }
        }
        else {
            this.alreadyUpdated = false;
        }
    }

    render() {
        if (!this.state.loading) {
            return (
                <LoaderTabs/>
            );
        }
        else if (this.state.error) {
            return (
                <Error/>
            );
        }
        else {
            return (
                <React.Fragment>
                    {_map(this.state.articles, (article, i) => (
                        <RedditArticle
                            key={i}
                            articleData={article}
                        />
                    ))}
                </React.Fragment>
            );
        }
    }
}

function mapStateToProps(state) {
	return {
		mocksEnabled: state.configuration.mocksEnabled
	};
}

RedditFeed.propTypes = {
    mocksEnabled: PropTypes.bool.isRequired
};

export default connect(mapStateToProps)(RedditFeed);