import { FETCH_CONTENT, FETCH_CURRENCY } from "./actions/types";

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.contentScriptQuery == FETCH_CONTENT) {
    let url = "";
    switch (request.itemId) {
      // case "bbc":
      //   url = "https://feeds.bbci.co.uk/news/rss.xml?edition=uk";
      //   break;
      case "huffpost":
        url = "https://www.huffpost.com/section/world-news/feed";
        break;
      case "theguardian":
        url = "https://www.theguardian.com/uk/rss";
        break;
      // case "eldiario":
      //     url = "https://www.eldiario.es/rss/";
      // break;
      case "elmundo":
        url = "https://e00-elmundo.uecdn.es/elmundo/rss/portada.xml";
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
      case "tfl-tube":
        url = "https://api.tfl.gov.uk/line/mode/overground/status";
        break;
      case "tfl-bus":
        url = "https://api.tfl.gov.uk/StopPoint/490008296G/arrivals";
        break;
      case "weather":
        url =
          "https://api.darksky.net/forecast/e9231a0d68ba35226274ad3b5e1f6dc4/51.5177896,0.1085338000000000?units=ca";
        break;
      default:
        url = "";
        break;
    }

    let xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
      if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
        if (
          request.itemId === "reddit" ||
          request.itemId === "tfl-tube" ||
          request.itemId === "tfl-bus" ||
          request.itemId === "weather"
        ) {
          sendResponse(JSON.parse(xmlHttp.response));
        } else {
          sendResponse(xmlHttp.responseText);
        }
      }
    };
    xmlHttp.open("GET", url, true); // make the request async
    xmlHttp.send(null);

    return true; // Will respond asynchronously.
  } else if (request.contentScriptQuery == FETCH_CURRENCY) {
    let xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
      if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
        sendResponse(JSON.parse(xmlHttp.response));
      }
    };
    xmlHttp.open(
      "GET",
      "https://currencydatafeed.com/api/data.php?token=k4210va9efvcx39ck4pd&currency=GBP/EUR",
      true
    ); // make the request async
    xmlHttp.send(null);

    return true; // Will respond asynchronously.
  }
});
