import _isEmpty from 'lodash/isEmpty';

export const parseFeed = (jsonData) => {
    let list = [];
    try {
        let jsonObject = JSON.parse(jsonData);
        Object.values(jsonObject.elements).map((element) => {
            if (element.name === "rss") {
                Object.values(element.elements).map((rssElement) => {
                    if (rssElement.name === "channel") {
                        Object.values(rssElement.elements).map((rssFeedItem) => {
                            if (rssFeedItem.name === "item") {
                                list.push(rssFeedItem);
                            }
                        });
                    }
                });
            }
        });
    }
    catch (error) {
        console.info('*** Could not parse JSON: ', error);
    }
    return list;
};

export const getDataFromProperty = (property) => {
    if (!_isEmpty(property.elements[0].cdata)) {
        return property.elements[0].cdata;
    }
    else {
        return property.elements[0].text;
    }
};