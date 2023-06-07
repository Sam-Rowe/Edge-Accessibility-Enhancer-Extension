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
    const dyslexicFontID = document.getElementById("dyslexicFontID2");

    if (dyslexicFontID){
        dyslexicFontID.onclick = function() {
            let isChecked = dyslexicFontID.checked;
            chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
                chrome.scripting.executeScript({
                    target: {tabId: tabs[0].id, allFrames: true},
                    files: ['content-scripts/content.js']
                }, function() {
                    chrome.tabs.sendMessage(tabs[0].id, {message: "toggle_font2", isChecked: isChecked});
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
    const overlay = document.getElementById("blueOverlay");

    if (overlay){
        overlay.onclick = function() {
            let isChecked = overlay.checked;
            chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
                chrome.scripting.executeScript({
                    target: {tabId: tabs[0].id, allFrames: true},
                    files: ['content-scripts/content.js']
                }, function() {
                    chrome.tabs.sendMessage(tabs[0].id, {message: "toggle_blue_overlay", isChecked: isChecked});
                });
            });
        };
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const overlay = document.getElementById("greenOverlay");

    if (overlay){
        overlay.onclick = function() {
            let isChecked = overlay.checked;
            chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
                chrome.scripting.executeScript({
                    target: {tabId: tabs[0].id, allFrames: true},
                    files: ['content-scripts/content.js']
                }, function() {
                    chrome.tabs.sendMessage(tabs[0].id, {message: "toggle_green_overlay", isChecked: isChecked});
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
