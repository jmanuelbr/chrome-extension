import * as HELPER from '../helper';
import Article from './article.component';
import _map from 'lodash/map';
import LoaderTabs from './loader/loader-tabs.component';
import Error from './error.component';
import _isEmpty from 'lodash/isEmpty';
import { connect } from 'react-redux';
import { getMockData } from '../mocks/bbc.mocks';
import { FETCH_CONTENT } from '../actions/types';
import AbstractWidget from './abstract-widget.component';
import PropTypes from 'prop-types';

export class BbcWidget extends AbstractWidget {
    constructor(props) {
        super(props);
        this.PROPERTIES = {
            feedUrl: "https://feeds.bbci.co.uk/news/rss.xml?edition=uk"
        };
        this.state = {
            articles: 'No news today :(',
            loading: false,
            error: true
        };
    }

    getArticles(jsonData) {
        var list = [];
        try {
            jsonData = HELPER.parseFeed(jsonData);
            Object.values(jsonData).map(element => {
                var article = {};
                Object.values(element.elements).map(property => {
                    switch (property.name) {
                        case "title": {
                            article.title = HELPER.getDataFromProperty(property);
                            break;
                        }
                        case "description": {
                            article.description = HELPER.getDataFromProperty(property);
                            break;
                        }
                        case "link": {
                            article.link = HELPER.getDataFromProperty(property);
                            break;
                        }
                        case "pubDate": {
                            article.date = HELPER.getDataFromProperty(property);
                            break;
                        }
                        case "media:thumbnail": {
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
        }
        catch (exception) {
            super.loading(false);
            console.error('*** EXCEPTION BBC component (I could not parse all articles) -> ', exception);
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

    renderComponent() {
        return (
            <div>
                {_map(this.state.articles, (article, i) => (
                    <Article
                        key={i}
                        articleData={article}
                    />
                ))}
            </div>
        );
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
            return(
                <React.Fragment>
                    {_map(this.state.articles, (article, i) => (
                        <Article
                            key={i}
                            articleData={article}
                        />
                    ))}
                </React.Fragment>
            );
        }
    }
}
function mapStateToProps(state) {
	return {
		mocksEnabled: state.configuration.mocksEnabled
	};
}

BbcWidget.propTypes = {
    mocksEnabled: PropTypes.bool.isRequired
};

export default connect(mapStateToProps)(BbcWidget);