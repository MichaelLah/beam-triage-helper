let changeColor = document.getElementById("changeColor");
let adminButton = document.getElementById("admin");

chrome.storage.sync.get("color", function(data) {
  changeColor.style.backgroundColor = data.color;
  changeColor.setAttribute("value", data.color);
});
changeColor.onclick = function(element) {
  let color = element.target.value;
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    chrome.tabs.executeScript(tabs[0].id, {
      code: 'document.body.style.backgroundColor = "' + color + '";'
    });
  });
};
adminButton.onclick = () => {
  chrome.extension.getBackgroundPage().console.log("ES6");
};
chrome.extension.getBackgroundPage().console.log("DUDE");
chrome.extension.getBackgroundPage().console.log(adminButton);
// adminButton.onClick = function() {
//   console.log("yeet")
//   chrome.extension.getBackgroundPage().console.log('foo');
// }
