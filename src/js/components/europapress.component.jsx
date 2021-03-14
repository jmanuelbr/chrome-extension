import * as HELPER from '../helper';
import {getMockData} from '../mocks/europapress.mocks';
import {NewsUpdatableWidget, connect} from './news-updatable-widget';
import {MAX_ARTICLES, ONE_HOUR} from '../constants';

class EuropaPressWidget extends NewsUpdatableWidget {
    constructor(props) {
        super(props);
        this.PROPERTIES = {
            feedUrl: props.feedUrl
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
                    article.thumbnail = chrome.runtime.getURL("../assets/no_photo_available.png");
                }
                if (articleCount < MAX_ARTICLES) {
                    list.push(article);
                    articleCount += 1;
                }
            });
        }
        catch (exception) {
            super.loading(false);
            console.error('*** EXCEPTION AS component (I could not parse all articles) -> ', exception);
        }
        return list;
    };

    componentDidMount() {
        this.initializeArticles(this.mockFunction);
        this.interval = setInterval(() => this.checkForNewUpdates(this.mockFunction), ONE_HOUR);
    }
}

export default connect(EuropaPressWidget);