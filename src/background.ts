chrome.webRequest.onBeforeRequest.addListener(function(t) {
    const [scheme, hostpath] = t.url.split("://")
    const shortcut = "go/"

    if (hostpath.slice(0, shortcut.length) === shortcut) {
        return {redirectUrl: "http://localhost:80" + hostpath.slice(shortcut.length - 1)}
    }
}, {
    urls: ["all_urls>"]
}, ["blocking"]);
