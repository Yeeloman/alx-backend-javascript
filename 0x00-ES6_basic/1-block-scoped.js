#!/usr/bin/node
/**
 * Function to process a task block based on a true or false condition.
 *
 * @param {boolean} trueOrFalse - The condition to determine task processing
 * @return {Array} Array containing two task processing results
 */
export default function taskBlock(trueOrFalse) {
  var task = false;
  var task2 = true;

  if (trueOrFalse) {
    let task = true;
    let task2 = false;
  }

  return [task, task2];
}
