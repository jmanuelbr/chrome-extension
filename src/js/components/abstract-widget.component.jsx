import { Component } from 'react';
import _map from 'lodash/map';
import _isEmpty from 'lodash/isEmpty';

export default class AbstractWidget extends Component {
    constructor(props) {
        super(props);
    }

    processData(feedData) {
        const self = this;
        var convert = require('xml-js');
        var jsonData = convert.xml2json(feedData, { compact: false, spaces: 4 });
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
        const self = this;
        self.setState(state => {
            state.loading(loadingState);
            return state;
        });
    }
}
