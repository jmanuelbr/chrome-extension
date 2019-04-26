chrome.runtime.onMessage.addListener(

    function(request, sender, sendResponse) {
      if (request.contentScriptQuery == "fetchContent") {
        
        let url = '';
        switch(request.itemId) {
            case "bbc":
                url = "https://feeds.bbci.co.uk/news/rss.xml?edition=uk";
            break;
            case "theguardian":
                url = "https://www.theguardian.com/uk/rss";
            break;
            case "eldiario":
                url = "https://www.eldiario.es/rss/";
            break;
            case "elpais":
                url = "https://ep00.epimg.net/rss/tags/ultimas_noticias.xml";
            break;
            case "slashdot":
                url = "https://slashdot.org/slashdot.xml";
            break;
            case "reddit":
                url = "https://www.reddit.com/r/chess/top/.json?t=day";
            break;
            default:
                url = ""
        }

        let xmlHttp = new XMLHttpRequest();
        xmlHttp.onreadystatechange = function() { 
            if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
                if (request.itemId === "reddit") {
                    sendResponse(JSON.parse(xmlHttp.response));
                }
                else {
                    sendResponse(xmlHttp.responseText);
                }
              
            }
        }
        xmlHttp.open("GET", url, true); // make the request async
        xmlHttp.send(null);

        return true;  // Will respond asynchronously.
      }
      else if (request.contentScriptQuery == "fetchCurrency") {
        let xmlHttp = new XMLHttpRequest();
        xmlHttp.onreadystatechange = function() { 
            if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
                sendResponse(JSON.parse(xmlHttp.response));
            }
        }
        xmlHttp.open("GET", "https://currencydatafeed.com/api/data.php?token=94c9yjpmdt1fvsa8icoj&currency=GBP/EUR", true); // make the request async
        xmlHttp.send(null);

        return true;  // Will respond asynchronously.
        
      }
    });