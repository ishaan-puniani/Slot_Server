'use strict';
var reelset = require('../../config/reelset');
var betlines = require('../../config/betlines');
var denominations = require('../../config/denominations');
var betLevels = require('../../config/betLevels');

function init() {
  return {
    symbols: reelset.initial,
    reelset: {
      basic: reelset.basic.initial,
      freespin: reelset.freespin.initial
    },
    gamestate: {current: "basic"},
    denomination: denominations,
    betlevel: betLevels,

    clientaction: "init",
    nextaction: "spin",
    multiplier: 1,

    betlines: betlines,
    win: 0,
    roundOver: true
  }
}


module.exports = init;
