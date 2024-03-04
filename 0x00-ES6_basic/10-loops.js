#!/usr/bin/node

/**
 * Appends a specified string to each value in the input array.
 *
 * @param {array} array - the input array
 * @param {string} appendString - the string to append to each value
 * @return {array} the modified input array with the string appended to each value
 */
export default function appendToEachArrayValue(array, appendString) {
    for (let value of array) {
      value = appendString + value;
    }

    return array;
  }
