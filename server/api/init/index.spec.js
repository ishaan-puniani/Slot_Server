'use strict';

var api = require('./index.js');
var reelset = require('../../config/reelset');
var betlines = require('../../config/betlines');

describe('Init Response Of the game:', function () {

    describe('init response', function () {

        it('should return array of symbols', function () {
            var response = api();
            expect(response).to.have.property('symbols');
            expect(response.symbols).to.be.an('array');
        });

        it('should return initial symbols for the reels', function () {
            var response = api();
            expect(response.symbols).to.eql(reelset.initial);
        });

        it('should return array of betlines', function () {
            var response = api();
            expect(response).to.have.property('betlines');
            expect(response.betlines).to.be.an('array');
            expect(response.betlines).to.eql(betlines.betlines);
        });
        it('should return initial response with bet amount 0 ', function () {
            var response = api();
            expect(response.bet).to.eql(0);
        });
        it('should return initial response with win amount 0 ', function () {
            var response = api();
            expect(response.win).to.eql(0);
        });
        it('should return initial response with roundOver to true ', function () {
            var response = api();
            expect(response).to.include.keys('roundOver');
            expect(response.roundOver).to.eql(true);
        });
    });
});
