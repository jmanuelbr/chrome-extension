import React, { Component } from 'react';
import _map from "lodash/map";
import Tabs from '../tabs.component';
import RedditFeed from './reddit-feed.component';

export default class RedditWidget extends Component {
    constructor(props) {
      super(props);
      this.state = { active: 0 };
    }
    render() {
        const tabsContent = [
            {
              name: "chess",
              feedUrl: "https://www.reddit.com/r/chess/top/.json?t=day"
            },
            {
              name: "london",
              feedUrl: "https://www.reddit.com/r/london/top/.json?t=day"
            },
            {
              name: "programming",
              feedUrl: "https://www.reddit.com/r/programming/top/.json?t=day"
            }
          ];

        return (
            <div className="reddit-tabs-section">
            <Tabs
              active={this.state.active}
              onChange={active => this.setState({ active })}
            >
              {_map(tabsContent, (tabContent, i) => (
                <span key={i} className="subreddit">{tabContent.name}</span>
              ))}
            </Tabs>
            {_map(tabsContent, (tabContent, i) => (
              <div
                className="reddit-tab-container"
                key={i}
                style={{ display: this.state.active == i ? "block" : "none" }}
              >
                <RedditFeed
                  key={i}
                  feedUrl={tabContent.feedUrl}/>
              </div>
            ))}
          </div>
        );
    }
}
