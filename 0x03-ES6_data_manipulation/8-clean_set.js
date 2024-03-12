const cleanSet = (set, startString) => {
  if (startString === '') {
    return '';
  }
  const newArr = [];
  set.forEach((element) => {
    if (element.startsWith(startString)) {
      const newElement = element.slice(startString.length);
      newArr.push(newElement);
    }
  });
  return newArr.join('-');
};

export default cleanSet;
