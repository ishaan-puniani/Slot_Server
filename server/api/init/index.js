'use strict';
var reelset = require('../../config/reelset');
var betlines = require('../../config/betlines');

function init() {
	console.log("I am in init of SlotServer")
    return {
        symbols: reelset.initial,
        betlines:betlines.betlines,
        win:0,
        roundOver:true
    }
}



module.exports = init;
