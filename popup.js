const button = document.getElementById('button');

'use strict';

button.onclick = function(e) {
    chrome.tabs.executeScript(null,
        {file:"goBananas.js"});
    window.close();
}

