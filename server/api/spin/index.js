'use strict';
var MersenneTwister = require('mersenne-twister');
// MersenneTwister uses Date().getTime() as a default seed - good enough
var generator = new MersenneTwister();

var reelset = require('../../config/reelset');

function spin(game) {
  console.log("SlotServer")
  /*
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
   * */
  console.log(game)
  //   var target = Math.floor(generator.random() * 10);
  var reelset_0 = reelset.basic.reels[0];
  var reelset_1 = reelset.basic.reels[1];
  var reelset_2 = reelset.basic.reels[2];
  var reelset_3 = reelset.basic.reels[3];
  var reelset_4 = reelset.basic.reels[4];

  var pos_0 = Math.floor(generator.random() * reelset_0.length);
  var pos_1 = Math.floor(generator.random() * reelset_1.length);
  var pos_2 = Math.floor(generator.random() * reelset_2.length);
  var pos_3 = Math.floor(generator.random() * reelset_3.length);
  var pos_4 = Math.floor(generator.random() * reelset_4.length);

  /*Fake logic to bound with in reels*/
  if (pos_0 < 0)pos_0 = 0;
  if (pos_0 > reelset_0.length - 3)pos_0 = reelset_0.length - 3;
  if (pos_1 < 0)pos_1 = 0;
  if (pos_1 > reelset_1.length - 3)pos_1 = reelset_1.length - 3;
  if (pos_2 < 0)pos_2 = 0;
  if (pos_2 > reelset_2.length - 3)pos_2 = reelset_2.length - 3;
  if (pos_3 < 0)pos_3 = 0;
  if (pos_3 > reelset_3.length - 3)pos_3 = reelset_3.length - 3;
  if (pos_4 < 0)pos_4 = 0;
  if (pos_4 > reelset_4.length - 3)pos_4 = reelset_4.length - 3;
  /*END Fake logic*/


  return {
    roundOver: true,
    //bet:game.bet,
    win: 160,
    symbols: [
      [reelset_0[pos_0], reelset_0[pos_0 + 1], reelset_0[pos_0 + 2]],
      [reelset_1[pos_1], reelset_1[pos_1 + 1], reelset_1[pos_1 + 2]],
      [reelset_2[pos_2], reelset_2[pos_2 + 1], reelset_2[pos_2 + 2]],
      [reelset_3[pos_3], reelset_3[pos_3 + 1], reelset_3[pos_3 + 2]],
      [reelset_4[pos_4], reelset_4[pos_4 + 1], reelset_4[pos_4 + 2]]
    ],
    reelset: {
      basic: [
        [reelset_0[pos_0], reelset_0[pos_0 + 1], reelset_0[pos_0 + 2]],
        [reelset_1[pos_1], reelset_1[pos_1 + 1], reelset_1[pos_1 + 2]],
        [reelset_2[pos_2], reelset_2[pos_2 + 1], reelset_2[pos_2 + 2]],
        [reelset_3[pos_3], reelset_3[pos_3 + 1], reelset_3[pos_3 + 2]],
        [reelset_4[pos_4], reelset_4[pos_4 + 1], reelset_4[pos_4 + 2]]
      ],
    },
    current: {reelset: "basic"},
    next: {reelset: "basic"},

    gamestate: {current: "basic", next: "basic"},
    nextaction: "spin",
    multiplier: 1,
    clientaction: "spin",
    winsituation: [{
      betline: 6,
      symbol: "SYM5",
      position: {
        0: [0, 2],
        1: [1, 2],
        2: [2, 1],
        3: [3, 2],
        4: [4, 2],
      },
      wintypes: [{type: "coins", win: 60}]
    }, {
      betline: 13,
      symbol: "SYM4",
      position: {
        0: [0, 1],
        1: [1, 1],
        2: [2, 0],
        3: [3, 1],
        4: [4, 1]
      },
      wintypes: [{type: "coins", win: 100}]
    }]


  }
}

module.exports = spin;
