var textInput = document.querySelectorAll('input[type="text"]');
var currentIdx = 0;
var limitIdx = textInput.length;

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  if (currentIdx==limitIdx) {
    currentIdx=0;
  };
  var inputElement = textInput[currentIdx];
  inputElement.focus();
  currentIdx++;
});
