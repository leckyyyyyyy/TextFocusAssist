chrome.commands.onCommand.addListener(function(command) {
  var queryInfo = {
    active: true,
    windowId: chrome.windows.WINDOW_ID_CURRENT
  };

  chrome.tabs.query(queryInfo, function (result) {
    var currentTab = result.shift();
    var message = {};
    chrome.tabs.sendMessage(currentTab.id, message, function() {});
  });
});
