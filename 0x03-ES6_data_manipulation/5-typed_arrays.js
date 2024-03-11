const createInt8TypedArray = (length, position, value) => {
  if (position < 0 || position >= length) {
    throw Error('Position outside range');
  }
  const buf = new ArrayBuffer(length);
  const view = new Int8Array(buf);
  view.set([value], position);
  return new DataView(buf);
};

export default createInt8TypedArray;
