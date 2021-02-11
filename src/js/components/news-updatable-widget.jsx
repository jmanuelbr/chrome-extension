import AbstractWidget from './abstract-widget.component';
import { FETCH_CONTENT } from '../actions/types';
import { connect as reduxConnect } from 'react-redux';

import PropTypes from 'prop-types';

export class NewsUpdatableWidget extends AbstractWidget {
    constructor(props) {
        super(props);

        this.state = {
            articles: [],
            loading: false,
            error: true
        };
    }

    initializeArticles(mockDataFunction) {
        if (this.props.mocksEnabled) {
            this.processData(mockDataFunction());
        }
        else {
            chrome.runtime.sendMessage(
                { contentScriptQuery: FETCH_CONTENT, properties: this.PROPERTIES},
                feedData => this.processData(feedData));
        }
    }

    processQuery(feedData) {
        const oldArticleList = this.state.articles;
        let hasUpdates = this.processData(feedData, oldArticleList);
        if (hasUpdates) {
            this.props.parentCallback(this.props.notificationIndex);
            this.forceUpdate();
        }
    }

    checkForNewUpdates(mockDataFunction, mocksDataFunction2) {
        if (this.props.mocksEnabled) {
            let mockFunction = (mocksDataFunction2) ? mocksDataFunction2 : mockDataFunction;
            this.processQuery(mockFunction());
            this.forceUpdate();
        }
        else {
            chrome.runtime.sendMessage(
                { contentScriptQuery: FETCH_CONTENT, properties: this.PROPERTIES},
                feedData => this.processQuery(feedData));
        }
    }
}

export function connect(NewsUpdatableWidget){
    return reduxConnect(
        (state, props)=>({
            mocksEnabled: state.configuration.mocksEnabled
        })
    )(NewsUpdatableWidget);
}

NewsUpdatableWidget.propTypes = {
    mocksEnabled: PropTypes.bool.isRequired
};

export default connect(NewsUpdatableWidget);
