'use strict';
var reelset = require('../../config/reelset');
var betlines = require('../../config/betlines');

function init(game) {

    return {
        roundOver:true,
        bet:0,
        win:0,
        symbols: reelset.initial,
        betlines:betlines.betlines
    }
}



module.exports = init;
