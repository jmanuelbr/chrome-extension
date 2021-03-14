import {getMockData} from '../mocks/europapress.mocks';
import {NewsUpdatableWidget, connect} from './news-updatable-widget';
import {DESCRIPTION, ENCLOSURE, LINK, MAX_ARTICLES, ONE_HOUR, PUB_DATE, TITLE} from '../constants';
import {getDataFromProperty, parseFeed} from "../helper";

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
            jsonData = parseFeed(jsonData);
            Object.values(jsonData).map(element => {
                let article = {};
                Object.values(element.elements).map(property => {
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
                        case ENCLOSURE: {
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