'use strict';
var MersenneTwister = require('mersenne-twister');
// MersenneTwister uses Date().getTime() as a default seed - good enough
var generator = new MersenneTwister();

var reelset = require('../../config/reelset');

function spin(game) {
    console.log("SlotServer")
	console.log(game)
    //   var target = Math.floor(generator.random() * 10);
    var reelset_0  = reelset.reels[0];
    var reelset_1  = reelset.reels[1];
    var reelset_2  = reelset.reels[2];
    
    return {
        roundOver:true,
        //bet:game.bet,
        win:2,
        symbols: [
            reelset_0[0], 
            reelset_1[1], 
            reelset_2[2],
        ]
    }
}



module.exports = spin;
