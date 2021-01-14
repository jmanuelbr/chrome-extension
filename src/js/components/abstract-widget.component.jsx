import { Component } from 'react';
import _map from 'lodash/map';
import _isEmpty from 'lodash/isEmpty';

export default class AbstractWidget extends Component {
    constructor(props) {
        super(props);
    }

    getXml(feedData) {
        const convert = require('xml-js');
        return convert.xml2json(feedData, { compact: false, spaces: 4 });
    }

    processData(feedData) {
        const self = this;
        const jsonData = self.getXml(feedData);
        self.setState(state => {
            state.articles = self.getArticles(jsonData);
            if (!_isEmpty(state.articles)) {
                state.error = false;
            }
            state.loading = true;
            return state;
        });
    }

    loading(loadingState) {
      
    }
}
