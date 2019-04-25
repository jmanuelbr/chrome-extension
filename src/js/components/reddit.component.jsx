import React, { Component } from 'react';
import RedditArticle from './reddit-article.component';
import _map from 'lodash/map';
import LoaderTabs from './loader-tabs.component';

export default class RedditWidget extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            contentReady: false
        };
    }

    getArticles(data) {
        var list = [];
        Object.values(data).map(element => {
            list.push(element.data);
        })       
        return list;
    }

    processData = function(feedData) {
        const self = this;
        self.setState(state => {
            state.articles = self.getArticles(feedData.data.children);
            state.contentReady = true;
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