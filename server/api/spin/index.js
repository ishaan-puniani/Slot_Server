'use strict';
var MersenneTwister = require('mersenne-twister');
// MersenneTwister uses Date().getTime() as a default seed - good enough
var generator = new MersenneTwister();

var reelset = require('../../config/reelset');

function spin() {
    //   var target = Math.floor(generator.random() * 10);
    var reelset_0  = reelset.reels[0];
    var reelset_1  = reelset.reels[1];
    var reelset_2  = reelset.reels[2];
    
    return {
        symbols: [
            reelset_0[Math.floor(generator.random() * reelset_0.length)], 
            reelset_1[Math.floor(generator.random() * reelset_1.length)],, 
            reelset_2[Math.floor(generator.random() * reelset_2.length)],
        ]
    }
}



module.exports = spin;
