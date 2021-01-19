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
        const oldArticle = this.state.articles[0].title;
        this.processData(feedData);
        if (oldArticle != this.state.articles[0].title) {
            console.log('*** FOUND UPDATES', this.props.notificationIndex);
            console.log('* old article ->   ', oldArticle);
            console.log('* new article ->   ', this.state.articles[0].title);
            this.props.parentCallback(this.props.notificationIndex);
            this.forceUpdate();
        }
    }

    checkForNewUpdates(mockDataFunction) {
        if (this.props.mocksEnabled) {
            const oldFirstArticleTitle = this.state.articles[0].title;
            this.processData(mockDataFunction());
            if (oldFirstArticleTitle != this.state.articles[0].title) {
                this.props.parentCallback(this.props.notificationIndex);
            }
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
