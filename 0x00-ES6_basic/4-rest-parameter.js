#!/usr/bin/node

/**
 * A function that returns the number of arguments passed to it.
 *
 * @param {...*} args - The arguments to count
 * @return {number} The number of arguments
 */
export default function returnHowManyArguments(...args) {
    let count = 0
    for (const arg of args) {
        count++
    }
    return count
}