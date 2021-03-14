import * as HELPER from '../helper';

let getMockData;
if (process.env.NODE_ENV === 'development') {
    getMockData = require('../mocks/elconfidencial.mocks').getMockData;
}
import {NewsUpdatableWidget, connect} from './news-updatable-widget';
import {ONE_HOUR} from "../constants";

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
            jsonData = HELPER.parseFeed(jsonData);
            Object.values(jsonData).map(element => {
                if (element.name === "entry") {
                    let article = {};
                    Object.values(element.elements).map(property => {
                        switch (property.name) {
                            case "title": {
                                article.title = HELPER.getDataFromProperty(property);
                                break;
                            }
                            case "content": {
                                article.description = HELPER.getDataFromProperty(property);
                                break;
                            }
                            case "link": {
                                article.thumbnail = property.attributes.href;
                                break;
                            }
                            case "id": {
                                article.link = HELPER.getDataFromProperty(property);
                                break;
                            }
                            case "enclosure": {
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