const fizzBuzzer = require('../fizzBuzzer');
const expect = require('chai').expect;

describe ('fizzBuzzer', function() {

	it('should return "fizz-buzz" if num is divisible by 15', function() {
		[15, 30, 45].forEach(function(input) {
			expect(fizzBuzzer(input)).to.equal('fizz-buzz');
		});
	});

	it('should return "buzz" if num is divisible by 5', function() {
		[5, 10, 20].forEach(function(input) {
			expect(fizzBuzzer(input)).to.equal('buzz');
		});
	});

	it('should return "fizz" if num is divisible by 3', function() {
		[6, 9, 12].forEach(function(input) {
			expect(fizzBuzzer(input)).to.equal('fizz');
		});
	});

	it('should return num if its not divisible by 3 or 5', function() {
		[2, 7, 17].forEach(function(input) {
			expect(fizzBuzzer(input)).to.equal(input);
		});
	});

	it ('should throw error if num is not a number', function() {
		const badInputs = ['what', false, 'x', function() {}, [1, 2, 3]];
		badInputs.forEach(function(input) {
			expect(function() {
				fizzBuzzer(input);
			}).to.throw(Error);
		});
	});
});