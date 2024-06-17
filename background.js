// (function() {
//     if (typeof browser === 'undefined') {
//       var browser = chrome;
//     }
  
//     // Function to execute content script when the extension icon is clicked
//     function executeContentScript(tab) {
//       browser.tabs.executeScript(tab.id, {
//         file: 'noshorts.js'
//       });
//     }
  
//     // Listen for the browser action click
//     browser.browserAction.onClicked.addListener(executeContentScript);
//   })();
  