import { Component } from 'react';
import _isEmpty from 'lodash/isEmpty';

export default class AbstractWidget extends Component {
    constructor(props) {
        super(props);
    }

    getXml(feedData) {
        const convert = require('xml-js');
        return convert.xml2json(feedData, { compact: false, spaces: 4 });
    }

    getUrlLinkFromList(articleList) {
        let list = [];
        if (articleList) {
            articleList.forEach(function (item, index) {
                list.push(item.link);
            });
        }
        return list;
    }

    hasUpdates(oldArticleList, newArticleList) {
        let hasUpdates = false;
        if (newArticleList && oldArticleList) {
            let newArticleListLinks = this.getUrlLinkFromList(newArticleList);
            let oldArticleListLinks = this.getUrlLinkFromList(oldArticleList);
            hasUpdates = (newArticleListLinks[0] != oldArticleListLinks[0]);
            newArticleListLinks.forEach(function (item, index) {
                if (!oldArticleListLinks.includes(item)) {
                    newArticleList[index].hasUpdates = true;
                }
            });
        }
        return hasUpdates;
    }

    processData(feedData, oldArticleList) {
        const self = this;
        let hasUpdates = false;
        const jsonData = self.getXml(feedData);
        let newArticleList = this.getArticles(jsonData);

        if (oldArticleList) {
            hasUpdates = this.hasUpdates(oldArticleList, newArticleList);
            if (hasUpdates) {
                self.setState(state => {
                    state.articles = newArticleList;
                    if (!_isEmpty(state.articles)) {
                        state.error = false;
                    }
                    state.loading = true;
                    return state;
                });
            }
        }
        else {
            self.setState(state => {
                state.articles = newArticleList;
                if (!_isEmpty(state.articles)) {
                    state.error = false;
                }
                state.loading = true;
                return state;
            });
        }

        return hasUpdates;
    }

    loading(loadingState) {
      
    }
}
