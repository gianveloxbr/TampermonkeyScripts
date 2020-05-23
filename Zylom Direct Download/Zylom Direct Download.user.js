// ==UserScript==
// @name         Zylom Direct Download
// @namespace    @veloxSZ
// @version      0.1
// @description  Script for direct download of zylom installer file!
// @author       veloxSZ
// @match        http://www.zylom.com/*/*/*/
// @grant        none
// @require      http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js
// ==/UserScript==

(function() {
    'use strict';

    var str1 = $(".gamepage_link").attr("href");
    var str2 = str1.replace("javascript:purchaseOnsite(", "");
    var strFinal = str2.replace(");","");
    var lang = strFinal.slice(0,1);
    var gameID = strFinal.slice(2);
    var fl = 'http://main.zylom.com/servlet/DownloadDownloadable?g=' + lang + '&s=' + gameID;
    $(".download_button").attr("href", fl);
    $(".button_text").text("Download the installer clicking on the button above.");
})();