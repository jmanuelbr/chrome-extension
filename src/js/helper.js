const TODAY = new Date();

export const formattedDate = function(date) {
    let result = "";
    const partials = date.toString().split(' ');
    if (date.getDay() === TODAY.getDay() && date.getMonth() === TODAY.getMonth()) {
        result = "Today " + partials[4];
    } else {
        result = partials[0] + ' ' + partials[2] + ' ' + partials[4];
    }
    return result;
};

export const isRecentNews = function(date, hours) {
    const time = (hours ? hours : 12);
    const hoursAgo = new Date(TODAY.getTime() - (time * 60 * 60 * 1000));
    return date > hoursAgo;
};

export const findUrl = function(text) {
    const source = (text || '').toString();
    let url;
    let matchArray;
    const regexToken = /(((ftp|https?):\/\/)[\-\w@:%_\+.~#?,&\/\/=]+)|((mailto:)?[_.\w]+@([\w][\w\-]+\.)+[a-zA-Z]{2,3})/g;

    while ((matchArray = regexToken.exec(source)) !== null) {
        url = matchArray[0];
        break;
    }
    return url;
};

export const isNew = function(date) {
    const hours = Math.abs(TODAY - date) / 36e5; //60*60*1000
    return (hours <= 1);
};

export const parseFeed = function(jsonData) {
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

export const getArticles = function(jsonData) {
    jsonData = parseFeed(jsonData);
    var list = [];
    Object.values(jsonData).map(element => {
        var article = {};
        Object.values(element.elements).map(property => {
            console.log('property', property);
            switch(property.name) { 
                case "title": { 
                    article.title = property.elements[0].cdata;
                    break; 
                } 
                case "description": { 
                    article.description = property.elements[0].cdata;
                    break; 
                } 
                case "link": { 
                    article.link = property.elements[0].text;
                    break; 
                } 
                case "pubDate": { 
                    article.pubdate = property.elements[0].text;
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
    return list;
};

