import {NewsUpdatableWidget, connect} from './news-updatable-widget';
import {CONTENT, ENCLOSURE, ID, LINK, ONE_HOUR, TITLE} from "../constants";
import {parseFeed, getDataFromProperty} from "../helper";

let getMockData;
if (process.env.NODE_ENV === 'development') {
    getMockData = require('../mocks/elconfidencial.mocks').getMockData;
}

class ElconfidencialWidget extends NewsUpdatableWidget {
    constructor(props) {
        super(props);
        this.PROPERTIES = {
            feedUrl: "https://rss.elconfidencial.com/espana/"
        };
        this.mockFunction = getMockData;
    }

    getArticles(jsonData) {
        let list = [];
        try {
            jsonData = parseFeed(jsonData);
            Object.values(jsonData).map(element => {
                if (element.name === "entry") {
                    let article = {};
                    Object.values(element.elements).map(property => {
                        switch (property.name) {
                            case TITLE: {
                                article.title = getDataFromProperty(property);
                                break;
                            }
                            case CONTENT: {
                                article.description = getDataFromProperty(property);
                                break;
                            }
                            case LINK: {
                                article.thumbnail = property.attributes.href;
                                break;
                            }
                            case ID: {
                                article.link = getDataFromProperty(property);
                                break;
                            }
                            case ENCLOSURE: {
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
                }
            });
        }
        catch (exception) {
            console.log('EXCEPTION', exception);
            list = [];
        }
        return list;
    };

    componentDidMount() {
        this.initializeArticles(this.mockFunction);
        this.interval = setInterval(() => this.checkForNewUpdates(this.mockFunction), ONE_HOUR);
    }
}

export default connect(ElconfidencialWidget);