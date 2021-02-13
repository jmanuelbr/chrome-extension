import SlashdotArticle from './slashdot-article.component';
import LoaderTabs from '../loader/loader-tabs.component';
import Error from '../error.component';
import { connect } from 'react-redux';
import { getMockData } from '../../mocks/slashdot.mocks';
import { FETCH_CONTENT } from '../../actions/types';
import AbstractWidget from '../abstract-widget.component';
import PropTypes from 'prop-types';
import {Fragment} from "react";

class SlashdotWidget extends AbstractWidget {
    constructor(props) {
        super(props);
        this.PROPERTIES = {
            feedUrl: "https://slashdot.org/slashdot.xml"
        };
        this.state = {
            articles: 'No news today :(',
            loading: false,
            error: true
        };
    }

    getArticles(jsonData) {
        let orderedArticles = [];
        try {
            let list = [];
            jsonData = JSON.parse(jsonData);
            Object.values(jsonData.elements).map(element => {
                Object.values(element.elements).map(property => {
                    var article = {};
                    Object.values(property.elements).map(prop => {
                        switch (prop.name) {
                            case "title": {
                                article.title = prop.elements[0].text;
                                break;
                            }
                            case "url": {
                                article.link = prop.elements[0].text;
                                break;
                            }
                            case "time": {
                                article.date = prop.elements[0].text;
                                break;
                            }
                            case "image": {
                                article.thumbnail = 'https://a.fsdn.com/sd/topics/' + prop.elements[0].text;
                                break;
                            }
                            case "comments": {
                                article.comments = Number(prop.elements[0].text);
                                break;
                            }
                            case "section": {
                                article.section = prop.elements[0].text;
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
            });
            // orderedArticles = _orderBy(list, ['comments'],['desc']);
            orderedArticles = list;
        }
        catch (exception) {
            super.loading(false);
            console.error('*** EXCEPTION SlashDot component (I could not parse all articles) -> ', exception);
            orderedArticles = [];
        }
        
        return orderedArticles;
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
                        <SlashdotArticle
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

SlashdotWidget.propTypes = {
    mocksEnabled: PropTypes.bool.isRequired
};

export default connect(mapStateToProps)(SlashdotWidget);
