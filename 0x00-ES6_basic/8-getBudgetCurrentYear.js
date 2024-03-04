#!/usr/bin/node

/**
 * Function to get the current year.
 *
 * @return {number} The current year
 */
function getCurrentYear() {
  const date = new Date();
  return date.getFullYear();
}

/**
 * Function to get the budget for the current year based on income, GDP, and capita.
 *
 * @param {number} income - The income for the current year
 * @param {number} gdp - The GDP for the current year
 * @param {number} capita - The capita for the current year
 * @return {object} The budget object containing income, GDP, and capita for the current year
 */
export default function getBudgetForCurrentYear(income, gdp, capita) {
    const budget = {
        [`income-${getCurrentYear()}`]: income,
        [`gdp-${getCurrentYear()}`]: gdp,
        [`capita-${getCurrentYear()}`]: capita
    };

    return budget;
}