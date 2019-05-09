import React, { Component } from 'react';
import SlashdotArticle from './slashdot-article.component';
import _orderBy from 'lodash/orderBy';
import _map from 'lodash/map';
import LoaderTabs from '../loader/loader-tabs.component';
import Error from '../error.component';
import _isEmpty from 'lodash/isEmpty';
import { connect } from 'react-redux';
import { getMockData } from '../../mocks/slashdot.mocks';
import { FETCH_CONTENT } from '../../actions/types';

export class SlashdotWidget extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: 'No news today :(',
            contentReady: false,
            error: false
        };
    }

    getArticles = function (jsonData) {
        let orderedArticles = [];
        try {
            let list = [];
            jsonData = JSON.parse(jsonData);
            Object.values(jsonData.elements).map(element => {
                Object.values(element.elements).map(property => {
                    var article = {};
                    Object.values(property.elements).map(prop => {
                        switch (prop.name) {
                            case "title": {
                                article.title = prop.elements[0].text;
                                break;
                            }
                            case "url": {
                                article.link = prop.elements[0].text;
                                break;
                            }
                            case "time": {
                                article.date = prop.elements[0].text;
                                break;
                            }
                            case "image": {
                                article.thumbnail = 'https://a.fsdn.com/sd/topics/' + prop.elements[0].text;
                                break;
                            }
                            case "comments": {
                                article.comments = Number(prop.elements[0].text);
                                break;
                            }
                            case "section": {
                                article.section = prop.elements[0].text;
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
            });
            orderedArticles = _orderBy(list, ['comments'],['desc']);
        }
        catch (exception) {
            console.log('EXCEPTION', exception);
            orderedArticles = [];
        }

        
        return orderedArticles;
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
                { contentScriptQuery: FETCH_CONTENT, itemId: "slashdot" }, 
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
                        <SlashdotArticle
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

export default connect(mapStateToProps)(SlashdotWidget);
