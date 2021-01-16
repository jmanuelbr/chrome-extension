import React from 'react';
import * as HELPER from '../helper';
import Article from './article.component';
import _map from 'lodash/map';
import LoaderTabs from './loader/loader-tabs.component';
import Error from './error.component';
import _isEmpty from 'lodash/isEmpty';
import { connect } from 'react-redux';
import { getMockData } from '../mocks/europapress.mocks';
import { FETCH_CONTENT } from '../actions/types';
import AbstractWidget from './abstract-widget.component';
import PropTypes from 'prop-types';
import { MAX_ARTICLES} from '../constants';
import {getMockData2} from "../mocks/theguardian2.mocks";

export class EuropaPressWidget extends AbstractWidget {
    constructor(props) {
        super(props);
        this.PROPERTIES = {
            feedUrl: "https://www.europapress.es/rss/rss.aspx?ch=00285"
        };
        this.state = {
            articles: [],
            loading: false,
            error: true
        };
    }

    getArticles(jsonData) {
        let list = [];
        let count = 0;
        try {
            jsonData = HELPER.parseFeed(jsonData);
            Object.values(jsonData).map(element => {
                let article = {};
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
                if (article.thumbnail === undefined) {
                    article.thumbnail = chrome.runtime.getURL("../assets/extremadura.jpg");
                }
                if (count < MAX_ARTICLES) {
                    list.push(article);
                    count += 1;
                }
            });
        }
        catch (exception) {
            super.loading(false);
            console.error('*** EXCEPTION AS component (I could not parse all articles) -> ', exception);
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
            this.props.parentCallback("3");
            console.log('jose FOUND UPDATES europapress!!');
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
                this.props.parentCallback("3");
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
            return(
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

EuropaPressWidget.propTypes = {
    mocksEnabled: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
	return {
		mocksEnabled: state.configuration.mocksEnabled
	};
}

export default connect(mapStateToProps)(EuropaPressWidget);