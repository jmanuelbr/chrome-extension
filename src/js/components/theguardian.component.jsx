import * as HELPER from '../helper';

let getMockData;
if (process.env.NODE_ENV === 'development') {
    getMockData = require('../mocks/theguardian.mocks').getMockData;
}
let getMockData2;
if (process.env.NODE_ENV === 'development') {
    getMockData = require('../mocks/theguardian2.mocks').getMockData2;
}
import { NewsUpdatableWidget, connect } from './news-updatable-widget';
import {MAX_ARTICLES, ONE_HOUR} from '../constants';
import {Fragment} from "react";

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
        this.interval = setInterval(() => this.checkForNewUpdates(this.mockFunction, this.mockFunction2), ONE_HOUR);
    }
}

export default connect(TheGuardianWidget);