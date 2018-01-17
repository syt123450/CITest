// var add = require('../src/toBeTested').add;
var add = require('../build/toBeTested.module').add;
var assert = require('assert');

describe('Test add() function', function() {
	it('Equals to 3', function() {
		assert.equal(3, add(1, 2))
	});
});
