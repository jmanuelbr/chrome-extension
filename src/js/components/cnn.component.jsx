import * as HELPER from '../helper';
import Article from './article.component';
import _map from 'lodash/map';
import LoaderTabs from './loader/loader-tabs.component';
import Error from './error.component';
import { connect } from 'react-redux';
import { getMockData } from '../mocks/cnn.mocks';
import { FETCH_CONTENT } from '../actions/types';
import AbstractWidget from './abstract-widget.component';
import PropTypes from 'prop-types';

class CnnWidget extends AbstractWidget {
    constructor (props) {
        super(props);
        this.PROPERTIES = {
            feedUrl: "http://rss.cnn.com/rss/edition_world.xml"
        };
        this.state = {
            articles: [],
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
                    switch(property.name) { 
                        case "title": { 
                            article.title = property.elements[0].cdata;
                            break; 
                        } 
                        case "description": { 
                            article.description = property.elements[0].text;
                            break; 
                        } 
                        case "link": { 
                            article.link = property.elements[0].text;
                            break; 
                        } 
                        case "pubDate": {
                            article.date = property.elements[0].text;
                            break; 
                        } 
                        case "media:group": {
                            Object.values(property.elements).map(mediaContent => {
                                if (mediaContent.attributes.width == "640") {
                                    article.thumbnail = mediaContent.attributes.url;
                                }
                            });
                            break; 
                        } 
                        default: { 
                        // Do nothing
                        break; 
                        } 
                    }
                });
                if (article.thumbnail === undefined) {
                    article.thumbnail = chrome.runtime.getURL("../assets/noimageavailable.png");
                }
                list.push(article);
            });
        }
        catch (exception) {
            super.loading(false);
            console.error('*** EXCEPTION CNN component (I could not parse all articles) -> ', exception);
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

const mapStateToProps = (state) => {
	return {
		mocksEnabled: state.configuration.mocksEnabled
	};
};

CnnWidget.propTypes = {
    mocksEnabled: PropTypes.bool.isRequired
};

export default connect(mapStateToProps)(CnnWidget);
