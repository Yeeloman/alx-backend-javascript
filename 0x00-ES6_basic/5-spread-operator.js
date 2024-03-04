#!/usr/bin/node

/**
 * Concatenates two arrays and a string.
 *
 * @param {Array} array1 - The first array to be concatenated
 * @param {Array} array2 - The second array to be concatenated
 * @param {String} string - The string to be concatenated
 * @return {Array} The concatenated array
 */
export default function concatArrays(array1, array2, string) {
    return [...array1, ...array2, ...string];
}

