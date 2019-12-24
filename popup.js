let changeColor = document.getElementById("changeColor");
let adminButton = document.getElementById("admin");
// let lighthouseButton = document.getElementById("lighthouse");

// chrome.storage.sync.get("color", function(data) {
//   changeColor.style.backgroundColor = data.color;
//   changeColor.setAttribute("value", data.color);
// });
// changeColor.onclick = function(element) {
//   let color = element.target.value;
//   chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
//     chrome.tabs.executeScript(tabs[0].id, {
//       code: 'document.body.style.backgroundColor = "' + color + '";'
//     });
//   });
// };
adminButton.onclick = () => {
  chrome.tabs.query({ active: true, lastFocusedWindow: true }, function(tabs) {
    const url = tabs[0] && tabs[0].url;
    chrome.extension.getBackgroundPage().console.log(url);
    if (url && url.includes("app.beam.dental")) {
      const localAdmin = url.replace("app.beam.dental", "app.beam.localhost");
      const noHttp = localAdmin.replace("https://", 'http://')
      chrome.tabs.update({ url: noHttp });
    }
  });
};
// lighthouseButton.onclick = () => {
//   chrome.tabs.query({ active: true, lastFocusedWindow: true }, function (tabs) {
//     const url = tabs[0] && tabs[0].url;
//     chrome.extension.getBackgroundPage().console.log(url);
//     if (url && url.includes("app.beam.dental")) {
//       const localAdmin = url.replace("app.beam.dental", "app.beam.localhost");
//       const noHttp = localAdmin.replace("https://", 'http://')
//       chrome.tabs.update({ url: noHttp });
//     }
//   });
// };