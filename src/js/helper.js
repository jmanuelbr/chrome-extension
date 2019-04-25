export const parseFeed = function (jsonData) {
    let jsonObject = JSON.parse(jsonData);
    let list = [];
    Object.values(jsonObject.elements).map((element) => {
        if (element.name === "rss") {
            Object.values(element.elements[0].elements).map((rssFeedItem) => {
                if (rssFeedItem.name === "item") {
                    list.push(rssFeedItem);
                }
            });
        }
    });
    return list;
};