#!/usr/bin/node
/**
 * Calculates the sum of the initial number and two expansions.
 *
 * @param {number} initialNumber - The initial number to be summed.
 * @param {number} expansion1989 - The expansion value for 1989. Defaults to 89 if not provided.
 * @param {number} expansion2019 - The expansion value for 2019. Defaults to 19 if not provided.
 * @return {number} The sum of the initial number and the two expansions.
 */
export default function getSumOfHoods(initialNumber, expansion1989 = 89, expansion2019 = 19) {
    return initialNumber + expansion1989 + expansion2019;
  }
