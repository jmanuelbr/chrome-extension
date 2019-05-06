import React, { Component } from 'react';
import RedditArticle from './reddit-article.component';
import _map from 'lodash/map';
import LoaderTabs from '../loader/loader-tabs.component';
import Error from '../error.component';
import _isEmpty from 'lodash/isEmpty';


export default class RedditWidget extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            contentReady: false,
            error: false
        };
    }

    getArticles(feedData) {
        try {
            const data = feedData.data.children;
            var list = [];
            Object.values(data).map(element => {
                list.push(element.data);
            })
        }
        catch (exception) {
            console.log('EXCEPTION', exception);
            list = [];
        }
       
        return list;
    }

    processData = function(feedData) {
        const self = this;
        self.setState(state => {
            state.articles = self.getArticles(feedData);
            state.contentReady = true;
            if (_isEmpty(state.articles)) {
                state.error = true;
            }
            return state;
        });
    }

    componentDidMount() {
        chrome.runtime.sendMessage(
            {contentScriptQuery: "fetchContent", itemId: "reddit"}, feedData => this.processData(feedData));
    }

    render() {
        if (!this.state.contentReady) {
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
                <div className="news-feed-container">
                    {_map(this.state.articles, (article, i) => (
                        <RedditArticle
                            key={i}
                            articleData={article}
                        />
                    ))}
                </div>
            );
        }
    }
}