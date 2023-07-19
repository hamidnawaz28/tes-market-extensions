const app_url = "https://www.search.mymusichistory4u.com/";

chrome.runtime.onInstalled.addListener(function () {
  chrome.tabs.create({ url: app_url })
});
