import React, { Component } from 'react';
import axios from 'axios';
import * as CONSTANTS from '../constants';
import * as HELPER from '../helper';
import Article from './article.component';
import _map from 'lodash/map';

export default class BbcWidget extends Component {
    constructor (props) {
        super(props);
        this.state = {
			articles: 'No news today :('
		};
      }
    
      componentDidMount() {
        const self = this;
        var convert = require('xml-js');
        axios.get(CONSTANTS.BCC_NEWS_FEED).then(function(response) {
            var jsonData = convert.xml2json(response.data, {compact: false, spaces: 4});
            self.setState(state => {
                state.articles = HELPER.getArticles(jsonData);
                return state;
              });
        })
        .catch((error) => {
            console.log('Error fetching BBC news feed data', error);
        });
	
	}
    render() {
        return (
            <div className="bbc-news">
                { _map(this.state.articles, (article, i) => (
                    <Article 
                        key={i}
                        title={article.title}
                        description={article.description}
                        link={article.link}
                        thumbnail={article.thumbnail}
                       />
                ))}
            </div>
        );
    }
}