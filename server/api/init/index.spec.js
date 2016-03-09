'use strict';

var api = require('./index.js');



describe('Init Response Of the game:', function() {


  describe('init response', function() {

		it('should return array of symbols', function() {
			console.log(api);
		  expect(api()).to.have.property('symbols');
		});

	});

});
