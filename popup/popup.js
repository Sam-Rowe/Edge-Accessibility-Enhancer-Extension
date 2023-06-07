document.addEventListener("DOMContentLoaded", function() {
    const dyslexicFontID = document.getElementById("dyslexicFontID");

    if (dyslexicFontID){
        dyslexicFontID.onclick = function() {
            let isChecked = dyslexicFontID.checked;
            chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
                chrome.scripting.executeScript({
                    target: {tabId: tabs[0].id, allFrames: true},
                    files: ['content-scripts/content.js']
                }, function() {
                    chrome.tabs.sendMessage(tabs[0].id, {message: "toggle_font", isChecked: isChecked});
                });
            });
        };
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const overlay = document.getElementById("yellowOverlay");

    if (overlay){
        overlay.onclick = function() {
            let isChecked = overlay.checked;
            chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
                chrome.scripting.executeScript({
                    target: {tabId: tabs[0].id, allFrames: true},
                    files: ['content-scripts/content.js']
                }, function() {
                    chrome.tabs.sendMessage(tabs[0].id, {message: "toggle_yellow_overlay", isChecked: isChecked});
                });
            });
        };
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const overlay = document.getElementById("lineHeight");

    if (overlay){
        overlay.onclick = function() {
            let isChecked = overlay.checked;
            chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
                chrome.scripting.executeScript({
                    target: {tabId: tabs[0].id, allFrames: true},
                    files: ['content-scripts/content.js']
                }, function() {
                    chrome.tabs.sendMessage(tabs[0].id, {message: "toggle_lineHeight", isChecked: isChecked});
                });
            });
        };
    }
});
