/* eslint-disable */
export const weakMap = new WeakMap();
let size = 0;
export const queryAPI = (endpoint) => {
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 1);
    size++;
  } else {
    weakMap.set(endpoint, weakMap.get(endpoint) + 1);
    size++;
  }
  if (size >= 5) {
    throw new Error('Endpoint load is high');
  }
};
