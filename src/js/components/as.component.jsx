import React, { Component } from 'react';
import * as HELPER from '../helper';
import Article from './article.component';
import _map from 'lodash/map';
import LoaderTabs from './loader/loader-tabs.component';
import Error from './error.component';
import _isEmpty from 'lodash/isEmpty';
import { connect } from 'react-redux';
import { getMockData } from '../mocks/as.mocks';
import { FETCH_CONTENT } from '../actions/types';

export class AsWidget extends Component {
    constructor(props) {
        super(props);
        this.PROPERTIES = {
            feedUrl: "https://as.com/rss/tags/ultimas_noticias.xml"
        }
        this.state = {
            articles: [],
            contentReady: false,
            error: false
        };
    }

    getArticles = (jsonData) => {
        var list = [];
        try {
            jsonData = HELPER.parseFeed(jsonData);
            Object.values(jsonData).map(element => {
                var article = {};
                Object.values(element.elements).map(property => {
                    switch (property.name) {
                        case "title": {
                            article.title = HELPER.getDataFromProperty(property);
                            break;
                        }
                        case "description": {
                            article.description = HELPER.getDataFromProperty(property);
                            break;
                        }
                        case "link": {
                            article.link = HELPER.getDataFromProperty(property);
                            break;
                        }
                        case "pubDate": {
                            article.date = HELPER.getDataFromProperty(property);
                            break;
                        }
                        case "enclosure": {
                            if (property.attributes.type == "image/jpeg" &&
                                property.attributes.url.indexOf("miniatura") > 0) {
                                article.thumbnail = property.attributes.url;
                            }
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
        }
        catch (exception) {
            console.log('EXCEPTION', exception);
            list = [];
        }
        return list;
    };

    processData = (feedData) => {
        const self = this;
        var convert = require('xml-js');
        var jsonData = convert.xml2json(feedData, { compact: false, spaces: 4 });
        self.setState(state => {
            state.articles = self.getArticles(jsonData);
            if (_isEmpty(state.articles)) {
                state.error = true;
            }
            state.contentReady = true;
            return state;
        });
    }

    componentDidMount = () => {
        if (this.props.mocksEnabled) {
            this.processData(getMockData());
        }
        else {
            chrome.runtime.sendMessage(
                { contentScriptQuery: FETCH_CONTENT, properties: this.PROPERTIES},
                feedData => this.processData(feedData));
        }
    }

    render = () => {
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

function mapStateToProps(state) {
	return {
		mocksEnabled: state.configuration.mocksEnabled
	};
}

export default connect(mapStateToProps)(AsWidget);