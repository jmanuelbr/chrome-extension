import React from 'react';
import * as HELPER from '../helper';
import Article from './article.component';
import _map from 'lodash/map';
import LoaderTabs from './loader/loader-tabs.component';
import Error from './error.component';
import { getMockData } from '../mocks/theguardian.mocks';
import { NewsUpdatableWidget, connect } from './news-updatable-widget';
import { MAX_ARTICLES } from '../constants';
import {getMockData2} from "../mocks/theguardian2.mocks";

class TheGuardianWidget extends NewsUpdatableWidget {
    constructor(props) {
        super(props);
        this.PROPERTIES = {
            feedUrl: "https://www.theguardian.com/uk/rss"
        };
        this.mockFunction = getMockData;
        this.mockFunction2 = getMockData2;
    }

    getArticles(jsonData) {
        let list = [];
        let articleCount = 0;
        try {
            jsonData = HELPER.parseFeed(jsonData);
            Object.values(jsonData).map(element => {
                let article = {};
                Object.values(element.elements).map(property => {
                    switch (property.name) {
                        case "title": { 
                            article.title = property.elements[0].text;
                            break; 
                        }
                        case "description": { 
                            article.description = property.elements[0].text;
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
                        case "media:content": {
                            if (property.attributes.width === "460") {
                                article.thumbnail = property.attributes.url;   
                            }
                            break; 
                        } 
                        default: { 
                        // Do nothing
                        break; 
                        } 
                    }
                });
                if (articleCount < MAX_ARTICLES) {
                    list.push(article);
                    articleCount += 1;
                }
                
            });
        }
        catch (exception) {
            super.loading(false);
            console.error('*** EXCEPTION TheGuardian (I could not parse all articles) -> ', exception);
        }

        return list;
    };

    componentDidMount() {
        this.initializeArticles(this.mockFunction);
        this.interval = setInterval(() => this.checkForNewUpdates(this.mockFunction, this.mockFunction2), 60000);
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

export default connect(TheGuardianWidget);