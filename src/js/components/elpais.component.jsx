import React from 'react';
import * as HELPER from '../helper';
import Article from './article.component';
import _map from 'lodash/map';
import LoaderTabs from './loader/loader-tabs.component';
import Error from './error.component';
import { connect } from 'react-redux';
import { getMockData } from '../mocks/elpais.mocks';
import { FETCH_CONTENT } from '../actions/types';
import AbstractWidget from './abstract-widget.component';
import PropTypes from 'prop-types';
import { MAX_ARTICLES } from '../constants';
import {getMockData2} from "../mocks/theguardian2.mocks";

class ElpaisWidget extends AbstractWidget {
    constructor(props) {
        super(props);
        this.PROPERTIES = {
            feedUrl: "https://feeds.elpais.com/mrss-s/pages/ep/site/elpais.com/portada"
        };
        this.state = {
            articles: 'No news today :(',
            loading: false,
            error: true
        };
    }

    getArticles(jsonData) {
        var list = [];
        let count = 0;
        try {
            jsonData = HELPER.parseFeed(jsonData);
            Object.values(jsonData).map(element => {
                var article = {};
                Object.values(element.elements).map(property => {
                    try {
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
                            case "media:content": {
                                article.thumbnail = property.attributes.url;
                                if (property.attributes.url.indexOf(".mp4") > 0) {
                                    article.video = property.attributes.url;
                                }
                                break;
                            }
                            case "content:encoded": {
                                article.description += "</br>" + HELPER.getDataFromProperty(property);
                                break;
                            }
                            default: {
                                // Do nothing
                                break;
                            }
                        }
                    }
                    catch (exception) {
                        // Do nothing
                    }
                });
                if (article.thumbnail === undefined) {
                    article.thumbnail = chrome.runtime.getURL("../assets/spain.jpg");
                }
                if (count < MAX_ARTICLES) {
                    list.push(article);
                    count += 1;
                }
            });
        }
        catch (exception) {
            super.loading(false);
            console.error('*** EXCEPTION ElPais component (I could not parse all articles) -> ', exception);
        }
        return list;
    };

    initializeArticles() {
        if (this.props.mocksEnabled) {
            this.processData(getMockData());
        }
        else {
            chrome.runtime.sendMessage(
                { contentScriptQuery: FETCH_CONTENT, properties: this.PROPERTIES},
                feedData => this.processData(feedData));
        }
    }

    processQuery(feedData) {
        const oldArticle = this.state.articles[0].title;
        this.processData(feedData);
        if (oldArticle != this.state.articles[0].title) {
            this.props.parentCallback("1");
            console.log('jose FOUND UPDATES elpais!!');
            console.log('jose old article', oldArticle);
            console.log('jose new article', this.state.articles[0].title);
            this.forceUpdate();
        }
    }

    checkForNewUpdates() {
        if (this.props.mocksEnabled) {
            const oldFirstArticleTitle = this.state.articles[0].title;
            this.processData(getMockData2());
            if (oldFirstArticleTitle != this.state.articles[0].title) {
                this.props.parentCallback("1");
            }
            this.forceUpdate();

        }
        else {
            chrome.runtime.sendMessage(
                { contentScriptQuery: FETCH_CONTENT, properties: this.PROPERTIES},
                feedData => this.processQuery(feedData));
        }
    }

    componentDidMount() {
        this.initializeArticles();
        this.interval = setInterval(() => this.checkForNewUpdates(), 60000);
    }
    componentWillUnmount() {
        clearInterval(this.interval);
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
                        <Article
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

ElpaisWidget.propTypes = {
    mocksEnabled: PropTypes.bool.isRequired
};

export default connect(mapStateToProps)(ElpaisWidget);
