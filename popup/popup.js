document.addEventListener("DOMContentLoaded", function() {
    const dyslexicFontID = document.getElementById("dyslexicFontID");

    if (dyslexicFontID){
        dyslexicFontID.onclick = function() {
            chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
                chrome.scripting.executeScript({
                    target: {tabId: tabs[0].id, allFrames: true},
                    files: ['content-scripts/content.js']
                });
            });
        };
    }
});
