'use strict';

var api = require('./index.js');



describe('Spin Response Of the game:', function () {


    describe('spin response', function () {

        it('should return array of symbols', function () {
            var response = api();
            expect(response).to.have.property('symbols');
            expect(response.symbols).to.be.an('array');
        });

        it('should return random response', function () {
            var response1 = api();
            var response2 = api();
            expect(response1).to.not.eql(response2);

        });

    });

});
