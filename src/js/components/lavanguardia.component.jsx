import React from 'react';
import Article from './article.component';
import _map from 'lodash/map';
import LoaderTabs from './loader/loader-tabs.component';
import Error from './error.component';
import { connect } from 'react-redux';
import { getMockData } from '../mocks/lavanguardia.mocks';
import { FETCH_CONTENT } from '../actions/types';
import AbstractWidget from './abstract-widget.component';
import PropTypes from 'prop-types';
import { MAX_ARTICLES } from '../constants';
import {getMockData2} from "../mocks/theguardian2.mocks";

class LaVanguardiaWidget extends AbstractWidget {
    constructor(props) {
        super(props);
        this.PROPERTIES = {
            feedUrl: "https://www.lavanguardia.com/newsml/home.xml"
        };
        this.state = {
            articles: 'No news today :(',
            loading: false,
            error: true
        };
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
        var list = [];
        let count = 0;
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
                                        article.link = myType.elements[0].text;;
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
                        article.thumbnail = property.elements[0].elements[2].elements[1].elements[2].elements[0].elements[0].elements[0].elements[0].elements[0].attributes.source;
                    }
                   
                });
                if (count < MAX_ARTICLES) {
                    list.push(article);
                    count += 1;
                }
            });
        }
        catch (exception) {
            super.loading(false);
            console.error('*** EXCEPTION LaVanguardia component (I could not parse all articles) -> ', exception);
        }
        return list;
    };

    initializeArticles() {
        if (this.props.mocksEnabled) {
            this.processData(getMockData());
        }
        else {
            chrome.runtime.sendMessage(
                { contentScriptQuery: FETCH_CONTENT, properties: this.PROPERTIES},
                feedData => this.processData(feedData));
        }
    }

    processQuery(feedData) {
        const oldArticle = this.state.articles[0].title;
        this.processData(feedData);
        if (oldArticle != this.state.articles[0].title) {
            console.log('jose FOUND UPDATES lavanguardia!!');
            console.log('jose old article', oldArticle);
            console.log('jose new article', this.state.articles[0].title);
            this.props.parentCallback("2");
            this.forceUpdate();
        }
    }

    checkForNewUpdates() {
        if (this.props.mocksEnabled) {
            const oldFirstArticleTitle = this.state.articles[0].title;
            this.processData(getMockData2());
            if (oldFirstArticleTitle != this.state.articles[0].title) {
                this.props.parentCallback("2");
            }
            this.forceUpdate();

        }
        else {
            chrome.runtime.sendMessage(
                { contentScriptQuery: FETCH_CONTENT, properties: this.PROPERTIES},
                feedData => this.processQuery(feedData));
        }
    }

    componentDidMount() {
        this.initializeArticles();
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
function mapStateToProps(state) {
	return {
		mocksEnabled: state.configuration.mocksEnabled
	};
}

LaVanguardiaWidget.propTypes = {
    mocksEnabled: PropTypes.bool.isRequired
};

export default connect(mapStateToProps)(LaVanguardiaWidget);
