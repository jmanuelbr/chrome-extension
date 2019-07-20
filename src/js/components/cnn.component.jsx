import React, { Component } from 'react';
import * as HELPER from '../helper';
import Article from './article.component';
import _map from 'lodash/map';
import LoaderTabs from './loader/loader-tabs.component';
import Error from './error.component';
import _isEmpty from 'lodash/isEmpty';
import { connect } from 'react-redux';
import { getMockData } from '../mocks/cnn.mocks';
import { FETCH_CONTENT } from '../actions/types';

export class CnnWidget extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: 'No news today :(',
            contentReady: false,
            error: false
        };
    }

    getArticles = function (jsonData) {
        var list = [];
        try {
            jsonData = HELPER.parseFeed(jsonData);
            Object.values(jsonData).map(element => {
                var article = {};
                Object.values(element.elements).map(property => {
                    console.log('property', property);
                    switch (property.name) {
                        case "title": {
                            article.title = property.elements[0].cdata;
                            break;
                        }
                        case "description": {
                            article.description = property.elements[0].cdata;
                            break;
                        }
                        case "link": {
                            article.link = property.elements[0].text;
                            break;
                        }
                        case "media:group": {
                            article.thumbnail = property.elements[0].attributes.url;
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
            console.log('EXCEPTION', exception);
            list = [];
        }
        return list;
    };

    processData = function(feedData) {
        const self = this;
        var convert = require('xml-js');
        var jsonData = convert.xml2json(feedData, { compact: false, spaces: 4 });
        self.setState(state => {
            state.articles = self.getArticles(jsonData);
            state.contentReady = true;
            if (_isEmpty(state.articles)) {
                state.error = true;
            }
            return state;
        });
    }

    componentDidMount() {
        if (this.props.mocksEnabled) {
            this.processData(getMockData())
        }
        else {
            chrome.runtime.sendMessage(
                { contentScriptQuery: FETCH_CONTENT, itemId: "cnn" }, 
                feedData => this.processData(feedData));
        }
    }

    render() {
        if (!this.state.contentReady) {
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
                <div className="news-feed-container">
                    {_map(this.state.articles, (article, i) => (
                        <Article
                            key={i}
                            articleData={article}
                        />
                    ))}
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

export default connect(mapStateToProps)(CnnWidget);