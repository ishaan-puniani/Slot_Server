'use strict';

var api = require('./index.js');
var gameRes = {bet:1}


describe('Spin Response Of the game:', function () {


    describe('spin response', function () {

        it('should return array of symbols', function () {
            var response = api(gameRes);
            expect(response).to.have.property('symbols');
            expect(response.symbols).to.be.an('array');
        });

        it('should return random response', function () {
            var response1 = api(gameRes);
            var response2 = api(gameRes);
            expect(response1).to.not.eql(response2);

        });
        
        it('should return response with same bet amount', function () {
            var response = api(gameRes);
            expect(response).to.include.keys('bet');
            expect(response.bet).to.eql(gameRes.bet);
            
        });
        
        it('should return response with win amount', function () {
            var response = api(gameRes);
            expect(response).to.include.keys('win');
        });
        
        it('should return response with roundOver ', function () {
            var response = api(gameRes);
            expect(response).to.include.keys('roundOver');
        });
    });

});
