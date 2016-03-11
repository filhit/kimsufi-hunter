// ==UserScript==
// @name           kimsufi-hunter
// @description    Hunts for available servers at kimsufi.com
// @include        https://www.kimsufi.com/fr/serveurs.xml*
// @version        1.0
// ==/UserScript==

(function() {
    window.onload = function () {
        if (isServerAvailable()) {
            notifyUser();
        }
        else {
            waitAndReloadPage();
        }
    }
    
    function isServerAvailable() {
        return document.querySelector("[data-ref=\"160sk1\"] .elapsed-time-since-last-delivery[style*=\"display: none\"]");
    }
    
    function notifyUser() {
        var audio = new Audio('http://soundbible.com/mp3/Air%20Horn-SoundBible.com-964603082.mp3');
        audio.play();
        audio.addEventListener("ended", function () { alert("buy!"); }, false);
    }
    
    function waitAndReloadPage() {
        setInterval(function () { location.reload();}, 10000);
    }
})();
