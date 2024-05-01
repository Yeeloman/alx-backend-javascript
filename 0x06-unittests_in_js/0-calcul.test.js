const ass = require('assert');
const { it, describe } = require('mocha');
const calculateNumber = require('./0-calcul');

describe('#calculate and round a number', function () {
  it('checking if numbers round', function () {
    const res = calculateNumber(1, 2);
    ass.strictEqual(res, 3);
  });
  it('checking if numbers round', function () {
    const res = calculateNumber(1.3, 2.1);
    ass.strictEqual(res, 3);
  });
  it('checking if numbers round', function () {
    const res = calculateNumber(1.6, 2.9);
    ass.strictEqual(res, 5);
  });
  it('checking if numbers round', function () {
    const res = calculateNumber(0, 0);
    ass.strictEqual(res, 0);
  });
  it('checking if numbers round', function () {
    const res = calculateNumber(-1.7, -1.8);
    ass.strictEqual(res, -4);
  });
  it('checking if numbers round', function () {
    const res = calculateNumber(-1.3, -1.3);
    ass.strictEqual(res, -2);
  });
});
