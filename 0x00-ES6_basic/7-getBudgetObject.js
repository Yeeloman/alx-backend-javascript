#!/usr/bin/node
/**
 * Creates a budget object based on the given income, GDP, and capita.
 *
 * @param {number} income - The income value
 * @param {number} gdp - The GDP value
 * @param {number} capita - The capita value
 * @return {Object} The budget object with income, GDP, and capita properties
 */
export default function getBudgetObject(income, gdp, capita) {
    const budget = {
      income,
      gdp,
      capita,
    };

    return budget;
  }