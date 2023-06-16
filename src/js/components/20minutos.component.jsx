import {getDataFromProperty, parseFeed} from '../helper';
import { NewsUpdatableWidget, connect } from './news-updatable-widget';
import {CONTENT_ENCODED, DESCRIPTION, LINK, MAX_ARTICLES, MEDIA_CONTENT, ONE_HOUR, PUB_DATE, TITLE} from '../constants';

let getMockData;
if (process.env.NODE_ENV === 'development') {
    getMockData = require('../mocks/20minutos.mocks').getMockData;
}

class TwentyMinutesWidget extends NewsUpdatableWidget {
    constructor(props) {
        super(props);
        this.PROPERTIES = {
            feedUrl: "https://www.20minutos.es/rss/"
        };
        this.mockFunction = getMockData;
    }

    getArticles(jsonData) {
        let list = [];
        let articleCount = 0;
        try {
            jsonData = parseFeed(jsonData);
            Object.values(jsonData).map(element => {
                let article = {};
                Object.values(element.elements).map(property => {
                    try {
                        switch (property.name) {
                            case TITLE: {
                                article.title = getDataFromProperty(property);
                                break;
                            }
                            case LINK: {
                                article.link = getDataFromProperty(property);
                                break;
                            }
                            case PUB_DATE: {
                                article.date = getDataFromProperty(property);
                                break;
                            }
                            case MEDIA_CONTENT: {
                                article.thumbnail = property.attributes.url;
                                if (property.attributes.url.indexOf(".mp4") > 0) {
                                    article.video = property.attributes.url;
                                }
                                break;
                            }
                            case CONTENT_ENCODED: {
                                article.description = getDataFromProperty(property);
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
            console.error('*** EXCEPTION 20Minutos component (I could not parse all articles) -> ', exception);
        }
        return list;
    };

    componentDidMount() {
        this.initializeArticles(this.mockFunction);
        this.interval = setInterval(() => this.checkForNewUpdates(this.mockFunction), ONE_HOUR);
    }
}

export default connect(TwentyMinutesWidget);
