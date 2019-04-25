import React, { Component } from 'react';
import * as HELPER from '../helper';
import Article from './article.component';
import _map from 'lodash/map';
import LoaderTabs from './loader-tabs.component';

export default class BbcWidget extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: 'No news today :(',
            contentReady: false
        };
    }

    getArticles = function (jsonData) {
        jsonData = HELPER.parseFeed(jsonData);
        var list = [];
        Object.values(jsonData).map(element => {
            var article = {};
            Object.values(element.elements).map(property => {
                switch (property.name) {
                    case "title": {
                        article.title = property.elements[0].cdata;
                        break;
                    }
                    case "description": {
                        article.description = property.elements[0].cdata;
                        break;
                    }
                    case "link": {
                        article.link = property.elements[0].text;
                        break;
                    }
                    case "pubDate": {
                        article.date = property.elements[0].text;
                        break;
                    }
                    case "media:thumbnail": {
                        article.thumbnail = property.attributes.url;
                        break;
                    }
                    default: {
                        // Do nothing
                        break;
                    }
                }
            });
            list.push(article);
        });
        return list;
    };

    processData = function(feedData) {
        const self = this;
        var convert = require('xml-js');
        var jsonData = convert.xml2json(feedData, { compact: false, spaces: 4 });
        self.setState(state => {
            state.articles = self.getArticles(jsonData);
            state.contentReady = true;
            return state;
        });
    }

    componentDidMount() {
        chrome.runtime.sendMessage(
            {contentScriptQuery: "fetchContent", itemId: "bbc"}, feedData => this.processData(feedData));
        
    }

    renderComponent() {
        return (
            <div className="news-feed-container">
                {_map(this.state.articles, (article, i) => (
                    <Article
                        key={i}
                        articleData={article}
                    />
                ))}
            </div>
        );
    }

    render() {
        if (!this.state.contentReady) {
            return (
                <LoaderTabs/>
            );
        }
        else {
            return(
                <div className="news-feed-container">
                    {_map(this.state.articles, (article, i) => (
                        <Article
                            key={i}
                            articleData={article}
                        />
                    ))}
                </div>
            );
        }
    }
}