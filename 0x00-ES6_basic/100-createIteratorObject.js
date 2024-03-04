#!/usr/bin/node

/**
 * Creates an iterator object based on the given report.
 *
 * @param {type} report - the report to create the iterator object from
 * @return {type} the created iterator object
 */
export default function createIteratorObject(report) {
    const iter = [];
    for (const idx of Object.values(report.allEmployees)) {
      iter.push(...idx);
    }
    return iter;
}