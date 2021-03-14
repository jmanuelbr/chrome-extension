import AbstractWidget from './abstract-widget.component';
import { FETCH_CONTENT } from '../actions/types';
import { connect as reduxConnect } from 'react-redux';
import PropTypes from 'prop-types';
import Article from './article.component';
import LoaderTabs from './loader/loader-tabs.component';
import Error from './error.component';
import {Fragment} from 'react';

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
    render() {
        if (!this.state.loading) {
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
                <Fragment>
                    {this.state.articles.map((article, i) => (
                        <Article
                            key={i}
                            articleData={article}
                        />
                    ))}
                </Fragment>
            );
        }
    }
    componentWillUnmount() {
        clearInterval(this.interval);
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
