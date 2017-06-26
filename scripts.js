// ==UserScript==
// @name         Laravel Expand Menus
// @namespace    http://ian.pe
// @version      1
// @description  Expands Laravels Documentation Menus!
// @author       Ian
// @match        https://laravel.com/docs/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    $(".sidebar h2+ul").show();
})();
