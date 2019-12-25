import { FETCH_CONTENT, OPEN_OPTIONS_PAGE } from "./actions/types";

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {

  async function getStorage() {
    return await new Promise(function(resolve, reject) {
      chrome.storage.sync.get(null, function(data) {
        resolve(data);
      });
    });
  }

  let promise = getStorage().then(function(result) {
    // console.log('promise result Jose', result);
  });

  if (request.contentScriptQuery == FETCH_CONTENT) {
    const url = request.properties.feedUrl;

    fetch(url).then(function(response) {
      response.text().then(function(responseText) {
        if (request.properties.needsJsonParse) {
          sendResponse(JSON.parse(responseText));
        } else {
          sendResponse(responseText);
        }
      });
    });

    return true; // Will respond asynchronously.
  }
  else if (request.contentScriptQuery == OPEN_OPTIONS_PAGE) {
    chrome.runtime.openOptionsPage();
  }
});
