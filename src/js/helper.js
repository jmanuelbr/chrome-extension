
export const parseFeed = (jsonData) => {
    let list = [];
    try {
        let jsonObject = JSON.parse(jsonData);
        Object.values(jsonObject.elements).map((element) => {
            if (element.name === "rss") {
                Object.values(element.elements).map((rssElement) => {
                    if (rssElement.name === "channel") {
                        Object.values(rssElement.elements).map((rssFeedItem) => {
                            if (rssFeedItem.name === "item" || rssFeedItem.name === "entry") {
                                list.push(rssFeedItem);
                            }
                        });
                    }
                });
            }
            else if (element.name === "feed") {
                Object.values(element.elements).map((rssElement) => {
                    list.push(rssElement);
                    // if (rssElement.name === "entry") {
                    //     Object.values(rssElement.elements).map((rssFeedItem) => {
                    //         list.push(rssFeedItem);
                    //     });
                    // }
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
    if (!isEmpty(property.elements[0].cdata)) {
        return property.elements[0].cdata;
    }
    else {
        return property.elements[0].text;
    }
};

export const getFormattedTime = (unixTime) => {
    const date = new Date(unixTime * 1000);
    const hours = date.getHours();
    const minutes = "0" + date.getMinutes();
    const formattedTime = hours + ':' + minutes.substr(-2);

    return formattedTime;
};

export const isEmpty = (val) => {

    // test results
    //---------------
    // []        true, empty array
    // {}        true, empty object
    // null      true
    // undefined true
    // ""        true, empty string
    // ''        true, empty string
    // 0         false, number
    // true      false, boolean
    // false     false, boolean
    // Date      false
    // function  false

    if (val === undefined)
        return true;

    if (typeof (val) == 'function' || typeof (val) == 'number' || typeof (val) == 'boolean' || Object.prototype.toString.call(val) === '[object Date]')
        return false;

    if (val == null || val.length === 0)        // null or 0 length array
        return true;

    if (typeof (val) == "object") {
        // empty object

        var r = true;

        for (var f in val)
            r = false;

        return r;
    }

    return false;
};
