import React from 'react';
import * as HELPER from '../helper';
import Article from './article.component';
import _map from 'lodash/map';
import LoaderTabs from './loader/loader-tabs.component';
import Error from './error.component';
import { connect } from 'react-redux';
import { getMockData } from '../mocks/theguardian.mocks';
import { getMockData2 } from '../mocks/theguardian2.mocks';
import { FETCH_CONTENT } from '../actions/types';
import AbstractWidget from './abstract-widget.component';
import PropTypes from 'prop-types';
import { MAX_ARTICLES } from '../constants';

class TheGuardianWidget extends AbstractWidget {
    constructor (props) {
        console.log('jose CONSTRUCTOR');
        super(props);
        const me = this;
        this.PROPERTIES = {
            feedUrl: "https://www.theguardian.com/uk/rss"
        };

        this.state = {
            articles: [],
            loading: false,
            error: true,
            hasUpdates: false
        };

        setTimeout(function() {
        if (props.mocksEnabled) {
            const oldFirstArticleTitle = me.state.articles[0].title;
            me.processData(getMockData2());
            if (oldFirstArticleTitle !== me.state.articles[0].title) {
                me.state.hasUpdates = true;
                console.log('jose send parent Callback');
                props.parentCallback("0");

            }

            me.forceUpdate();

        }
        else {

            const oldFirstArticleTitle = me.state.articles[0].title;
            chrome.runtime.sendMessage(
                { contentScriptQuery: FETCH_CONTENT, properties: me.PROPERTIES},
                feedData => me.processData(feedData));
            if (oldFirstArticleTitle !== me.state.articles[0].title) {
                me.state.hasUpdates = true;
                props.parentCallback("0");
            }
        }
        }, 4000); // Check every 3 minutes

    }


    getArticles(jsonData) {
        let list = [];
        let count = 0;
        try {
            jsonData = HELPER.parseFeed(jsonData);
            Object.values(jsonData).map(element => {
                var article = {};
                Object.values(element.elements).map(property => {
                    switch(property.name) { 
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
                if (count < MAX_ARTICLES) {
                    list.push(article);
                    count += 1;
                }
                
            });
        }
        catch (exception) {
            super.loading(false);
            console.error('*** EXCEPTION TheGuardian (I could not parse all articles) -> ', exception);
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
    componentDidMount() {
        this.initializeArticles();
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

const mapStateToProps = (state) => {
	return {
		mocksEnabled: state.configuration.mocksEnabled
	};
};

TheGuardianWidget.propTypes = {
    mocksEnabled: PropTypes.bool.isRequired
};

export default connect(mapStateToProps)(TheGuardianWidget);
