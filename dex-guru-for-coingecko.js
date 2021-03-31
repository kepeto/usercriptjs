// ==UserScript==
// @name         dex.guru Live Chart for CoinGecko
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  add dex.guru button to current coin
// @author       kepeto
// @match        https://*.coingecko.com/*/coins/*
// @icon         https://www.google.com/s2/favicons?domain=coingecko.com
// @require      http://code.jquery.com/jquery-latest.js
// ==/UserScript==

(function() {
    'use strict';

    $(document).ready(function() {

    });

    var contract = document.querySelector("body > div.container > div.mt-3 > div.col-12.row.p-0.m-0.mb-2.d-flex.flex-column-reverse.flex-sm-row > div.col-md-9.col-lg-7.p-0 > div > div:nth-child(3) > div > div > i").getAttribute("data-address");

    if(contract !== null){
        var dexGuru = "data:image/png;base64,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";
        var dexGuruUrl = "https://dex.guru/token/" + contract;

        $('body').append('<input type="image" src="'+dexGuru+'" id="CP"/>');

        $("#CP").css("position", "fixed").css("top", 0).css("left", "50%");
        $('#CP').click(function(){
            window.open(dexGuruUrl, "_blank");
        });
    }
})();