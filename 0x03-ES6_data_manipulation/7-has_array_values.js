const hasValuesFromArray = (set, arr) => {
  for (let val of arr) {
    if (!set.has(val)) {
      return false;
    }
  }
  return true;
};

export default hasValuesFromArray;
