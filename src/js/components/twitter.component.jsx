import {getDataFromProperty, parseFeed} from '../helper';
import { NewsUpdatableWidget, connect } from './news-updatable-widget';
import {CONTENT_ENCODED, DESCRIPTION, LINK, MAX_ARTICLES, MEDIA_CONTENT, ONE_HOUR, PUB_DATE, TITLE} from '../constants';

let getMockData;
if (process.env.NODE_ENV === 'development') {
    getMockData = require('../mocks/elpais.mocks').getMockData;
}

class TwitterWidget extends NewsUpdatableWidget {
    constructor(props) {
        super(props);
        this.PROPERTIES = {
            appId: "21981019",
            apiKey: "hXPCpgcEmzZGu07j5ET73bduW",
            apiKeySecret: "YLqu2IsQIpdiUSt1x3gFokF9YlLLhFyRUVxW6AONrDlvbV0KlQ",
            apiBearerToken: "AAAAAAAAAAAAAAAAAAAAAFtnTwEAAAAAj4eXbTIUCoVHsk6thz%2B3FCfu8SA%3DGiBCJY2C3MBq6GOMeMSLsxxtdR75BQUemFVK3Eub3HjnM5lkou",
            feedUrl: "https://feeds.elpais.com/mrss-s/pages/ep/site/elpais.com/portada"
        };
        this.mockFunction = getMockData;
    }``

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
                            case DESCRIPTION: {
                                article.description = getDataFromProperty(property);
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
                                article.description += "</br>" + getDataFromProperty(property);
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
            console.error('*** EXCEPTION ElPais component (I could not parse all articles) -> ', exception);
        }
        return list;
    };

    componentDidMount() {
        this.initializeArticles(this.mockFunction);
        this.interval = setInterval(() => this.checkForNewUpdates(this.mockFunction), ONE_HOUR);
    }
}

export default connect(TwitterWidget);
