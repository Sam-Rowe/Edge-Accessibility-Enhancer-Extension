chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (request.message === "toggle_font") {
            if (request.isChecked) {
                let allElements = document.querySelectorAll('*');
                for(let i = 0; i < allElements.length; i++) {
                     allElements[i].style.fontFamily = 'Comic Sans MS';
        }
            } else {
                document.body.style.fontFamily = "";
            }
        }

        if (request.message === "toggle_overlay") {
            if (request.isChecked) {
                // Load the stylesheet
                var link = document.createElement("link");
                link.href = chrome.runtime.getURL("content-scripts/content.css");
                link.type = "text/css";
                link.rel = "stylesheet";
                document.getElementsByTagName("head")[0].appendChild(link);
            } else {
                // Remove the stylesheet
                var links = document.getElementsByTagName("link");
                for (var i = links.length - 1; i >= 0; i--) {
                    if (links[i].href === chrome.runtime.getURL("content-scripts/content.css")) {
                        links[i].parentNode.removeChild(links[i]);
                    }
                }
            }
        }
    }
);

