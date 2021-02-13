import * as HELPER from '../helper';
import Article from './article.component';
import LoaderTabs from './loader/loader-tabs.component';
import Error from './error.component';
import { connect } from 'react-redux';
import { getMockData } from '../mocks/elconfidencial.mocks';
import { FETCH_CONTENT } from '../actions/types';
import AbstractWidget from './abstract-widget.component';
import PropTypes from 'prop-types';
import {Fragment} from "react";

export class ElconfidencialWidget extends AbstractWidget {
    constructor(props) {
        super(props);
        this.PROPERTIES = {
            feedUrl: "https://rss.elconfidencial.com/espana/"
        };
        this.state = {
            articles: 'No news today :(',
            loading: false,
            error: true
        };
    }

    getArticles(jsonData) {
        let list = [];
        try {
            jsonData = HELPER.parseFeed(jsonData);
            Object.values(jsonData).map(element => {
                if (element.name === "entry") {
                    var article = {};
                    Object.values(element.elements).map(property => {
                        switch (property.name) {
                            case "title": {
                                article.title = HELPER.getDataFromProperty(property);
                                break;
                            }
                            case "content": {
                                article.description = HELPER.getDataFromProperty(property);
                                break;
                            }
                            case "link": {
                                article.thumbnail = property.attributes.href;
                                break;
                            }
                            case "id": {
                                article.link = HELPER.getDataFromProperty(property);
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
                }
            });
        }
        catch (exception) {
            console.log('EXCEPTION', exception);
            list = [];
        }
        return list;
    };

    componentDidMount() {
        if (this.props.mocksEnabled) {
            this.processData(getMockData());
        }
        else {
            chrome.runtime.sendMessage(
                { contentScriptQuery: FETCH_CONTENT, properties: this.PROPERTIES},
                feedData => this.processData(feedData));
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
}

function mapStateToProps(state) {
	return {
		mocksEnabled: state.configuration.mocksEnabled
	};
}

ElconfidencialWidget.propTypes = {
    mocksEnabled: PropTypes.bool.isRequired
};

export default connect(mapStateToProps)(ElconfidencialWidget);