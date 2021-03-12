let changeColor = document.getElementById("changeColor");
let adminButton = document.getElementById("admin");
const fillLighthouseFamilyButton = document.getElementById('fillLighthouseFamily');
let copyIdButton = document.getElementById("copyId");

// adminButton.onclick = () => {
//   chrome.tabs.query({active: true, lastFocusedWindow: true}, function (tabs) {
//     const url = tabs[0] && tabs[0].url;
//     if (url && url.includes("app.beam.dental")) {
//       const localAdmin = url.replace("app.beam.dental", "app.beam.localhost");
//       const noHttp = localAdmin.replace("https://", 'http://')
//       chrome.tabs.create({url: noHttp});
//     }
//   });
// };
// copyIdButton.onclick = () => {
//   chrome.tabs.query({}, tabs => {
//     tabs.forEach(tb => {
//       chrome.extension.getBackgroundPage().console.log('foo');
//     })
//   })
//
//   chrome.tabs.query({active: true}, tabs => {
//     const url = tabs[0] && tabs[0].url;
//     const re = new RegExp('\\w{8}-\\w{4}-\\w{4}-\\w{4}-\\w{12}')
//     const tumbledRe = new RegExp('\\w{32}')
//     const idMatches = url.match(re)
//     const tumbledIdMatches = url.match(tumbledRe)
//     const id = idMatches && idMatches.length > 0 ? idMatches[0] : ''
//     const tumbledId = tumbledIdMatches && tumbledIdMatches.length > 0 ? tumbledIdMatches[0] : ''
//     chrome.extension.getBackgroundPage().console.log("matching ID:", id);
//     chrome.extension.getBackgroundPage().console.log("matching tumbled ID:", tumbledId);
//     navigator.clipboard.writeText(id || tumbledId)
//     .then(() => {
//       chrome.extension.getBackgroundPage().console.log('Text copied to clipboard');
//     })
//     .catch(err => {
//       // This can happen if the user denies clipboard permissions:
//       chrome.extension.getBackgroundPage().console.error('Could not copy text: ', err);
//     });
//   });
// };

fillLighthouseFamilyButton.onclick = () => {
  console.log('fill family button')
  chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {command: "fillFamily"}, function (response) {
      console.log(response)
      // console.log(response.result);
    });
  });
}