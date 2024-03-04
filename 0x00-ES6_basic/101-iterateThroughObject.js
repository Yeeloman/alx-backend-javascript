#!/usr/bin/node
/**
 * Iterate through the given object using the provided iterator and join the results with a pipe character.
 *
 * @param {Array} reportWithIterator - An array of items to iterate through
 * @return {string} The joined string with pipe characters
 */
export default function iterateThroughObject(reportWithIterator) {
    return reportWithIterator.join(' | ');
}
