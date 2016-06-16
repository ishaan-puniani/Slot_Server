'use strict';
var reelset = require('../../config/reelset');
var betlines = require('../../config/betlines');

function init() {
    return {
        symbols: reelset.initial,
        betlines:betlines.betlines,
        win:0,
        roundOver:true
    }
}



module.exports = init;
