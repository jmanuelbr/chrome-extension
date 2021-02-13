import { Component } from 'react';
import Tabs from '../tabs.component';
import RedditFeed from './reddit-feed.component';

export default class RedditWidget extends Component {
    constructor(props) {
      super(props);
      this.state = { 
        active: '0',
        dropdownSelected: "day"};
      this.componentNeedsUpdate = false;
    }
    setDropdownOption(e) {
      this.componentNeedsUpdate = true;
      const selected = e.currentTarget.dataset.id;
      if (selected) {
        this.setState({ dropdownSelected: selected });
      }
      
    };
    render() {
      const dropdownContent = [
        {
          name: "hour"
        },
        {
          name: "day"
        },
        {
          name: "week"
        },
        {
          name: "month"
        },
        {
          name: "year"
        },
        {
          name: "all"
        }
      ];
      const tabsContent = [
          {
            name: "chess",
            feedUrl: "https://www.reddit.com/r/chess/top/.json"
          },
          {
            name: "london",
            feedUrl: "https://www.reddit.com/r/london/top/.json"
          },
          {
            name: "programming",
            feedUrl: "https://www.reddit.com/r/programming/top/.json"
          },
          {
            name: "world",
            feedUrl: "https://www.reddit.com/r/worldnews/top/.json"
          },
        ];

        return (
            <div className="reddit-tabs-section">
                <div className="tabs-bar">
                    <Tabs
                      active={this.state.active}
                      onChange={active => this.setState({ active })}>
                        {tabsContent.map((tabContent, i) => (
                            <span key={i} className="subreddit">{tabContent.name}</span>
                        ))}
                    </Tabs>
                </div>
                <div className="dropdown-container">
                    <label className="dropdown">
                        <div className="dd-button">
                            {this.state.dropdownSelected}
                        </div>

                        <input type="checkbox" className="dd-input" id="test"/>

                        <ul className="dd-menu">
                            {dropdownContent.map((dropdownOption, i) => (
                                <li
                                  className="dropdown-option"
                                  key={i}
                                  data-id={dropdownOption.name}
                                  onClick={this.setDropdownOption.bind(this)}>
                                    {dropdownOption.name}
                                </li>
                          ))}
                        </ul>

                    </label>
                </div>
                {tabsContent.map((tabContent, i) => (
                    <div
                      className="reddit-tab-container"
                      key={i}
                      style={{ display: this.state.active == i ? "block" : "none" }}>
                        <RedditFeed
                            key={i}
                            feedUrl={tabContent.feedUrl}
                            period={this.state.dropdownSelected}
                            updateComponent={this.componentNeedsUpdate}/>
                    </div>
                      ))}
            </div>
        );
    }
}
