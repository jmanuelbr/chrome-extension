import React, { Component } from 'react';
import axios from 'axios';
import * as CONSTANTS from '../constants';
import RedditArticle from './reddit-article.component';
import _map from 'lodash/map';
import Loader from './loader.component';

export default class RedditWidget extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            contentReady: false
        };
    }

    getArticles(data) {
        var list = [];
        Object.values(data).map(element => {
            list.push(element.data);
        })       
        return list;
    }

    componentDidMount() {
        const self = this;
        axios.get(CONSTANTS.REDDIT_FEED).then(function (response) {
            self.setState(state => {
                state.articles = self.getArticles(response.data.data.children);
                state.contentReady = true;
                return state;
            });
        })
        .catch((error) => {
            console.log('Error fetching Reddit feed data', error);
        });
    }

    render() {
        if (!this.state.contentReady) {
            return (
                <Loader/>
            );
        }
        else {
            return (
                <div className="news-feed-container">
                    {_map(this.state.articles, (article, i) => (
                        <RedditArticle
                            key={i}
                            articleData={article}
                        />
                    ))}
                </div>
            );
        }
    }
}