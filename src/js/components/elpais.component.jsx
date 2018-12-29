import React, { Component } from 'react';
import axios from 'axios';
import * as CONSTANTS from '../constants';
import * as HELPER from '../helper';
import Article from './article.component';
import _map from 'lodash/map';

export default class ElpaisWidget extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: 'No news today :('
        };
    }

    getArticles = function (jsonData) {
        jsonData = HELPER.parseFeed(jsonData);
        var list = [];
        Object.values(jsonData).map(element => {
            var article = {};
            Object.values(element.elements).map(property => {
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
                        article.link = property.elements[0].cdata;
                        break;
                    }
                    case "pubDate": {
                        article.date = property.elements[0].cdata;
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
        });
        return list;
    };

    componentDidMount() {
        const self = this;
        var convert = require('xml-js');
        axios.get(CONSTANTS.EL_PAIS_FEED).then(function (response) {
            var jsonData = convert.xml2json(response.data, { compact: false, spaces: 4 });
            self.setState(state => {
                state.articles = self.getArticles(jsonData);
                return state;
            });
        })
        .catch((error) => {
            console.log('Error fetching Eldirio news feed data', error);
        });
    }

    render() {
        return (
            <div className="news-feed-container">
                {_map(this.state.articles, (article, i) => (
                    <Article
                        key={i}
                        title={article.title}
                        description={article.description}
                        link={article.link}
                        thumbnail={article.thumbnail}
                        date={article.date}
                    />
                ))}
            </div>
        );
    }
}