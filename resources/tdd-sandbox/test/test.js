var assert = require('assert');
var every_roman_numeral_up_to_one_thousand = require('../every_numeral');
var Roman = require('../roman');

describe('Roman', function () {
    describe('the constructor', function () {

        it('should throw if passed a string that cannot be coerced to an integer', function () {
            assert.throws(() => new Roman('bad'));
        });

    });

    describe('The properties', function () {

        let conversions = [
            { int: 1000, str: "M" },
            { int: 2000, str: "MM" },
            { int: 2999, str: "MM" }
        ];

        describe('thousands', function () {
            conversions.forEach(function (i) {
                it(`should be "${i.str}" when passed ${i.int}`, function () {
                    let k = new Roman(i.int);
                    assert.equal(k.thousands, i.str);
                });
            });
        });

        describe('nine_hundreds', function () {

            let conversions = [
                { int: 900, str: "CM" },
            ];

            conversions.forEach(function (i) {
                it(`should be "${i.str}" when passed ${i.int}`, function () {
                    let k = new Roman(i.int);
                    assert.equal(k.nine_hundreds, i.str);
                });
            });

        });

        describe('five_hundreds', function () {

            let conversions = [
                { int: 500, str: "D" },
                { int: 1500, str: "D" },
                { int: 1000, str: "" },
                { int: 2000, str: "" }
            ];

            conversions.forEach(function (i) {
                it(`should be "${i.str}" when passed ${i.int}`, function () {
                    let k = new Roman(i.int);
                    assert.equal(k.five_hundreds, i.str);
                });
            });

        });

        describe('four_hundreds', function () {

            let conversions = [
                { int: 400, str: "CD" },
            ];

            conversions.forEach(function (i) {
                it(`should be "${i.str}" when passed ${i.int}`, function () {
                    let k = new Roman(i.int);
                    assert.equal(k.four_hundreds, i.str);
                });
            });

        });

        describe('hundreds', function () {

            let conversions = [
                { int: 100, str: "C" },
                { int: 600, str: "C" },
            ];

            conversions.forEach(function (i) {
                it(`should be "${i.str}" when passed ${i.int}`, function () {
                    let k = new Roman(i.int);
                    assert.equal(k.hundreds, i.str);
                });
            });

        });

        describe('nineties', function () {

            let conversions = [
                { int: 90, str: "XC" },
            ];

            conversions.forEach(function (i) {
                it(`should be "${i.str}" when passed ${i.int}`, function () {
                    let k = new Roman(i.int);
                    assert.equal(k.nineties, i.str);
                });
            });

        });

        describe('fifties', function () {

            let conversions = [
                { int: 50, str: "L" },
                { int: 100, str: "" },
                { int: 150, str: "L" },
            ];

            conversions.forEach(function (i) {
                it(`should be "${i.str}" when passed ${i.int}`, function () {
                    let k = new Roman(i.int);
                    assert.equal(k.fifties, i.str);
                });
            });

        });

        describe('forties', function () {

            let conversions = [
                { int: 40, str: "XL" },
                { int: 80, str: "" },
            ];

            conversions.forEach(function (i) {
                it(`should be "${i.str}" when passed ${i.int}`, function () {
                    let k = new Roman(i.int);
                    assert.equal(k.forties, i.str);
                });
            });

        });

        describe('tens', function () {

            let conversions = [
                { int: 10, str: "X" },
                { int: 20, str: "XX" },
                { int: 60, str: "X" },
                { int: 180, str: "XXX" }
            ];

            conversions.forEach(function (i) {
                it(`should be "${i.str}" when passed ${i.int}`, function () {
                    let k = new Roman(i.int);
                    assert.equal(k.tens, i.str);
                });
            });
        })

        describe('nines', function () {

            let conversions = [
                { int: 9, str: "IX" },
                { int: 18, str: "" }
            ];

            conversions.forEach(function (i) {
                it(`should be "${i.str}" when passed ${i.int}`, function () {
                    let k = new Roman(i.int);
                    assert.equal(k.nines, i.str);
                });
            });
        });

        describe('fives', function () {

            let conversions = [
                { int: 5, str: "V" },
                { int: 10, str: "" }
            ];

            conversions.forEach(function (i) {
                it(`should be "${i.str}" when passed ${i.int}`, function () {
                    let k = new Roman(i.int);
                    assert.equal(k.fives, i.str);
                });
            });
        });

        describe('fours', function () {

            let conversions = [
                { int: 4, str: "IV" },
                { int: 8, str: "" }
            ];

            conversions.forEach(function (i) {
                it(`should be "${i.str}" when passed ${i.int}`, function () {
                    let k = new Roman(i.int);
                    assert.equal(k.fours, i.str);
                });
            });
        });

        describe('ones', function () {

            let conversions = [
                { int: 3, str: "III" },
                { int: 1, str: "I" }
            ];

            conversions.forEach(function (i) {
                it(`should be "${i.str}" when passed ${i.int}`, function () {
                    let k = new Roman(i.int);
                    assert.equal(k.ones, i.str);
                });
            });
        });


    });

    describe('The full numeral', function () {


        every_roman_numeral_up_to_one_thousand.forEach(function (i) {
            it(`should be "${i.str}" when passed ${i.int}`, function () {
                let k = new Roman(i.int);
                assert.equal(k.full_numeral, i.str);
            });
        });
    })

});

