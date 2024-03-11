const createInt8TypedArray = (length, position, value) => {
  if (position < 0 || position >= length) {
    throw Error('Position outside range');
  }
  const buf = new ArrayBuffer(length);
  const view = new Int8Array(buf, 0, length);
  view.set([value], position);
  return new DataView(buff);
};

export default createInt8TypedArray;
