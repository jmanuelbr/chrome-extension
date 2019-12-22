import React from 'react';
import * as HELPER from '../helper';
import Article from './article.component';
import _map from 'lodash/map';
import LoaderTabs from './loader/loader-tabs.component';
import Error from './error.component';
import _isEmpty from 'lodash/isEmpty';
import { connect } from 'react-redux';
import { getMockData } from '../mocks/contractor-uk.mocks';
import { FETCH_CONTENT } from '../actions/types';
import AbstractWidget from './abstract-widget.component';

class ContractorUKWidget extends AbstractWidget {
    constructor (props) {
        super(props);
        this.PROPERTIES = {
            feedUrl: "https://www.contractoruk.com/forums/external.php?type=RSS2&forumids=4"
        };
        this.state = {
            articles: [],
            loading: false,
            error: true
		};
    }

    getArticles(jsonData) {
        var list = [];
        try {
            jsonData = HELPER.parseFeed(jsonData);
            Object.values(jsonData).map(element => {
                var article = {};
                Object.values(element.elements).map(property => {
                    switch(property.name) { 
                        case "title": { 
                            if (property.elements[0].text) {
                                article.title = property.elements[0].text;
                            }
                            else {
                                article.title = HELPER.getDataFromProperty(property);
                            }
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
                        case "media:content": {
                            // Do nothing
                            break; 
                        } 
                        default: { 
                        // Do nothing
                        break; 
                        } 
                    }
                });
                list.push(article);
            });
        }
        catch (exception) {
            loading(false);
            console.error('*** EXCEPTION (I could not parse all articles) -> ', exception);
        }

        return list;
    };
    
    componentDidMount() {
        if (this.props.mocksEnabled) {
            this.processData(getMockData());
        }
        else {
            chrome.runtime.sendMessage(
                { contentScriptQuery: FETCH_CONTENT, properties: this.PROPERTIES},
                feedData => this.processData(feedData));
        }
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
            const css = {
                "cssThumbnail": "small"
            };
            return (
                <div className="news-feed-container">
                    {_map(this.state.articles, (article, i) => {
                        article.thumbnail = chrome.runtime.getURL("../assets/contractor-uk.png");
                        return (
                            <Article 
                                key={i}
                                articleData={article}
                                css={css}
                            />
                        );
                        })
                    }
                </div>
            );
        }
    }
}
function mapStateToProps(state) {
	return {
		mocksEnabled: state.configuration.mocksEnabled
	};
}

export default connect(mapStateToProps)(ContractorUKWidget);
