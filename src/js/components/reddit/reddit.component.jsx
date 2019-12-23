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

class RedditWidget extends AbstractWidget {
    constructor(props) {
        super(props);
        this.PROPERTIES = {
            feedUrl: "https://www.reddit.com/r/chess/top/.json?t=day",
            needsJsonParse: true
        };
        this.state = {
            articles: [],
            loading: false,
            error: true
        };
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
            loading(false);
            console.error('*** EXCEPTION (I could not parse all articles) -> ', exception);
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

export default connect(mapStateToProps)(RedditWidget);