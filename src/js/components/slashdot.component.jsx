import React, { Component } from 'react';
import axios from 'axios';
import * as CONSTANTS from '../constants';
import SlashdotArticle from './slashdot-article.component';
import _orderBy from 'lodash/orderBy';
import _map from 'lodash/map';

export default class SlashdotWidget extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: 'No news today :('
        };
    }

    getArticles = function (jsonData) {
        jsonData = JSON.parse(jsonData);
        var list = [];
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
        let orderedArticles = _orderBy(list, ['comments'],['desc'])
        return orderedArticles;
    };

    componentDidMount() {
        const self = this;
        var convert = require('xml-js');
        axios.get(CONSTANTS.SLASHDOT_FEED).then(function (response) {
            var jsonData = convert.xml2json(response.data, { compact: false, spaces: 4 });
            
            self.setState(state => {
                state.articles = self.getArticles(jsonData);
                return state;
            });
        })
        .catch((error) => {
            console.log('Error fetching Slashdot news feed data', error);
        });
    }

    render() {
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