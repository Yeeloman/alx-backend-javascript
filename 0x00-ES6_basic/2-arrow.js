#!/usr/bin/node

/**
 * Retrieves the list of San Francisco neighborhoods and provides a method to add a new neighborhood to the list.
 *
 * @return {Array} The updated list of San Francisco neighborhoods after adding a new neighborhood.
 */
export default function getNeighborhoodsList() {
  this.sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];

  this.addNeighborhood = (newNeighborhood) => {
    this.sanFranciscoNeighborhoods.push(newNeighborhood);
    return this.sanFranciscoNeighborhoods;
  };
}
