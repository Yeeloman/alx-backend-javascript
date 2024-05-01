const ass = require('assert');
const { it, describe } = require('mocha');
const calculateNumber = require('./1-calcul');

describe('all calculations', function () {
  describe('SUM calculation', function () {
    it('checking if numbers round', function () {
      const res = calculateNumber('SUM', 1, 2);
      ass.strictEqual(res, 3);
    });
    it('checking if numbers round', function () {
      const res = calculateNumber('SUM', 1.3, 2.1);
      ass.strictEqual(res, 3);
    });
    it('checking if numbers round', function () {
      const res = calculateNumber('SUM', 1.6, 2.9);
      ass.strictEqual(res, 5);
    });
    it('checking if numbers round', function () {
      const res = calculateNumber('SUM', 0, 0);
      ass.strictEqual(res, 0);
    });
    it('checking if numbers round', function () {
      const res = calculateNumber('SUM', -1.7, -1.8);
      ass.strictEqual(res, -4);
    });
    it('checking if numbers round', function () {
      const res = calculateNumber('SUM', -1.3, -1.3);
      ass.strictEqual(res, -2);
    });
  });
  describe('SUBSTRACT numbers', function () {
    it('checking substraction of rounded numbers', function () {
      const res = calculateNumber('SUBTRACT', 2, 1);
      ass.strictEqual(res, 1);
    });
    it('checking substraction of rounded numbers', function () {
      const res = calculateNumber('SUBTRACT', 2.2, 1.4);
      ass.strictEqual(res, 1);
    });
    it('checking substraction of rounded numbers', function () {
      const res = calculateNumber('SUBTRACT', 2.8, 1.4);
      ass.strictEqual(res, 2);
    });
    it('checking substraction of rounded numbers', function () {
      const res = calculateNumber('SUBTRACT', 2.9, 1.7);
      ass.strictEqual(res, 1);
    });
  });

  describe('DIVIDE numbers', function () {
    it('checking divide of rounded numbers', function () {
      const res = calculateNumber('DIVIDE', 2.2, 1.4);
      ass.strictEqual(res, 2);
    });
    it('checking divide of rounded numbers', function () {
      const res = calculateNumber('DIVIDE', 2.9, 1.8);
      ass.strictEqual(res, 1.5);
    });
    it('checking divide of rounded numbers', function () {
      const res = calculateNumber('DIVIDE', 2.2, 0);
      ass.strictEqual(res, 'Error');
    });
  });
});
