import { Component } from 'react';
import Tabs from "./tabs.component";
import TheGuardianWidget from "./theguardian.component";
import ElpaisWidget from "./elpais.component";
import SlashdotWidget from "./slashdot/slashdot.component";
import RedditWidget from './reddit/reddit.component';
import EuropaPressWidget from './europapress.component';
import LaVanguardiaWidget from './lavanguardia.component';
import ElconfidencialWidget from "./elconfidencial.component";
import { isEmpty } from "../helper";

export default class TabsContainerWidget extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: '0',
            notifications: []
        };
        this.setNoticationForTab=this.setNoticationForTab.bind(this);
        this.setTabIcon=this.setTabIcon.bind(this);
    }

    componentDidMount() {
        window.timer_interval = 0;
    }
    componentWillUnmount() {
        clearInterval(window.timer_interval);
        window.timer_interval = 0;
    }

    tabFocusChanged(active) {
        if (this.state.notifications && this.state.notifications.includes(active)) {
            const index = this.state.notifications.indexOf(active);
            if (index > -1) {
                this.state.notifications.splice(index, 1);
            }
        }
        if (isEmpty(this.state.notifications)) {
            clearInterval(window.timer_interval);
            window.timer_interval = 0;
            this.setTabIcon(chrome.runtime.getURL("../../assets/google_favicon.png"));
        }
        this.setState({active});
    }

    setTabIcon(iconPath) {
        let link = document.querySelector("link[rel~='icon']");
        if (!link) {
            link = document.createElement('link');
            link.rel = 'icon';
            document.getElementsByTagName('head')[0].appendChild(link);
        }
        link.href = iconPath;
    }

    setNoticationForTab(tabNumber) {
        if (this.state.notifications.indexOf(tabNumber) === -1 && this.state.active != tabNumber) {
            this.state.notifications.push(tabNumber);
            this.forceUpdate();
        }
        let intervalBooleanFlag = true;
        let myself = this;
        if (window.timer_interval == 0) {
            window.timer_interval = setInterval(function() {
                if (intervalBooleanFlag) {
                    intervalBooleanFlag=false;
                    myself.setTabIcon(chrome.runtime.getURL("../../assets/google_favicon_bell.png"));
                } else {
                    intervalBooleanFlag=true;
                    myself.setTabIcon(chrome.runtime.getURL("../../assets/google_favicon.png"));
                }
            }, 1000); // Swap notification alert message every second
        }
    }

    render() {
        const tabsContent = [
            {
                widget: <TheGuardianWidget parentCallback={this.setNoticationForTab} notificationIndex={"0"} />,
                icon: chrome.runtime.getURL("../assets/theguardian.png")
            },
            {
                widget: <ElpaisWidget parentCallback={this.setNoticationForTab} notificationIndex={"1"} />,
                icon: chrome.runtime.getURL("../assets/elpais.png")
            },
            {
                widget: <LaVanguardiaWidget parentCallback={this.setNoticationForTab} notificationIndex={"2"} />,
                icon: chrome.runtime.getURL("../assets/lavanguardia.png")
            },
            {
                widget: <ElconfidencialWidget parentCallback={this.setNoticationForTab} notificationIndex={"3"} />,
                icon: chrome.runtime.getURL("../assets/elconfidencial.png")
            },
            {
                widget: <EuropaPressWidget parentCallback={this.setNoticationForTab} notificationIndex={"4"} feedUrl={"https://www.europapress.es/rss/rss.aspx?ch=00285"}/>,
                icon: chrome.runtime.getURL("../assets/extremadura_icon.png")
            },
            {
                widget: <EuropaPressWidget parentCallback={this.setNoticationForTab} notificationIndex={"5"} feedUrl={"https://www.europapress.es/rss/rss.aspx?ch=00295"}/>,
                icon: chrome.runtime.getURL("../assets/murcia_icon.png")
            },
            {
                widget: <SlashdotWidget />,
                icon: chrome.runtime.getURL("../assets/slashdot.png")
            },
            {
                widget: <RedditWidget />,
                icon: chrome.runtime.getURL("../assets/reddit.png")
            }
          ];

        return (
            <div className="tabs-section">
                <Tabs
                    active={this.state.active}
                    onChange={active => this.tabFocusChanged(active)}
                    notifications={this.state.notifications}
                >
                    {tabsContent.map((tabContent, i) => (
                        <img src={tabContent.icon} key={i} />
                    ))}
                </Tabs>
                {tabsContent.map((tabContent, i) => (
                    <div
                        className="tab-container"
                        key={i}
                        style={{ display: this.state.active == i ? "block" : "none" }}
                    >
                        {tabContent.widget}
                    </div>
                ))}
            </div>
        );
    }
}
