import React from 'react';
import * as HELPER from '../helper';
import Article from './article.component';
import _map from 'lodash/map';
import LoaderTabs from './loader/loader-tabs.component';
import Error from './error.component';
import { getMockData } from '../mocks/libertaddigital.mocks';
import { NewsUpdatableWidget, connect } from './news-updatable-widget';
import { MAX_ARTICLES } from '../constants';

class LibertadDigitalWidget extends NewsUpdatableWidget {
    constructor(props) {
        super(props);
        this.PROPERTIES = {
            feedUrl: "https://feeds2.feedburner.com/libertaddigital/portada"
        };
        this.mockFunction = getMockData;
    }

    getArticles(jsonData) {
        let list = [];
        let articleCount = 0;
        try {
            jsonData = HELPER.parseFeed(jsonData);
            Object.values(jsonData).map(element => {
                let article = {};
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
                if (articleCount < MAX_ARTICLES) {
                    list.push(article);
                    articleCount += 1;
                }
            });
        }
        catch (exception) {
            super.loading(false);
            console.error('*** EXCEPTION Libertad Digital component (I could not parse all articles) -> ', exception);
        }
        return list;
    };

    componentDidMount() {
        this.initializeArticles(this.mockFunction);
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

export default connect(LibertadDigitalWidget);
