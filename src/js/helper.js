export const parseFeed = function (jsonData) {
    let jsonObject = JSON.parse(jsonData);
    let list = [];
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
    return list;
};