import { NewsUpdatableWidget, connect } from './news-updatable-widget';
import {MAX_ARTICLES, ONE_HOUR} from '../constants';

let getMockData;
if (process.env.NODE_ENV === 'development') {
    getMockData = require('../mocks/lavanguardia.mocks').getMockData;
}

class LaVanguardiaWidget extends NewsUpdatableWidget {
    constructor(props) {
        super(props);
        this.PROPERTIES = {
            feedUrl: "https://www.lavanguardia.com/newsml/home.xml"
        };
        this.mockFunction = getMockData;
    }

     unEntity(str){
        return str.replace(/&amp;/g, "&")
            .replace(/&lt;/g, "<")
            .replace(/&gt;/g, ">")
            .replace(/&quot;/g,'"')
            .replace(/&nbsp;/g, " ");
     }

    parseFeed(jsonData) {
        let list = [];
        try {
            let jsonObject = JSON.parse(jsonData);
            Object.values(jsonObject.elements).map((element) => {
                if (element.name === "NewsML") {
                    Object.values(element.elements).map((rssElement) => {
                        if (rssElement.name === "NewsItem") {
                            list.push(rssElement);
                        }
                    });
                }
            });
        }
        catch (error) {
            console.info('*** Could not parse JSON: ', error);
        }
        return list;
    };

    getArticles(jsonData) {
        let list = [];
        let articleCount = 0;
        try {
            jsonData = this.parseFeed(jsonData);
            Object.values(jsonData).map(element => {
                var article = {};
                Object.values(element.elements).map(property => {
                    if (property.name === "NewsLines") {
                        Object.values(property.elements).map(myType => {
                            try {
                                switch (myType.name) {
                                    case "HeadLine": {
                                        article.title = myType.elements[0].cdata;
                                        break;
                                    }
                                    case "Description": {
                                        article.description = this.unEntity(myType.elements[0].cdata);
                                        break;
                                    }
                                    case "DeriveredFrom": {
                                        article.link = myType.elements[0].text;
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
                    }
                    else if (property.name === "NewsComponent") {
                        // TODO: This is going to break sooner or later
                        article.thumbnail = property.elements[0].elements[2].elements[1].elements[2].elements[0].elements[0].elements[0].elements[0].elements[0].attributes.source;
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
            console.error('*** EXCEPTION LaVanguardia component (I could not parse all articles) -> ', exception);
        }
        return list;
    };

    componentDidMount() {
        this.initializeArticles(this.mockFunction);
        this.interval = setInterval(() => this.checkForNewUpdates(this.mockFunction), ONE_HOUR);
    }
}

export default connect(LaVanguardiaWidget);
