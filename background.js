chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  if (changeInfo.status === 'complete') {
    chrome.scripting.executeScript({
      target: { tabId: tabId },
      function: hideElement
    });
  }
});

function hideElement() {
  const targetElements = document.getElementsByClassName("js-gryphon-beta-btn");
  console.log(targetElements);
  if (targetElements) {
    Array.from(targetElements).forEach(elem => elem.style.display = 'none');
  }
}
