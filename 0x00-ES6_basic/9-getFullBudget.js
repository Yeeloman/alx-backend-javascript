#!/usr/bin/node

import getBudgetObject from './7-getBudgetObject.js';

/**
 * Returns a full budget object including additional methods to get income in dollars and euros.
 *
 * @param {number} income - the income value
 * @param {number} gdp - the GDP value
 * @param {number} capita - the capita value
 * @return {object} the full budget object
 */
export default function getFullBudgetObject(income, gdp, capita) {
  const budget = getBudgetObject(income, gdp, capita);
  const fullBudget = {
    ...budget,
    /**
     * Convert the income to dollars format.
     *
     * @param {any} income - the input income
     * @return {string} the income in dollars format
     */
    getIncomeInDollars(income) {
        return `$${income}`;
    },
    /**
     * Returns the income in euros.
     *
     * @param {number} income - the income to be converted to euros
     * @return {string} the income in euros
     */
    getIncomeInEuros(income) {
        return `${income} euros`;
      },
  };

  return fullBudget;
}