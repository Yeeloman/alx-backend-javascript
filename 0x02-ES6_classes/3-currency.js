export default class Currency {
  constructor(code, name) {
    if (typeof code !== 'string') {
      throw new TypeError('Code must be a string');
    } else {
      this._code = code;
    }
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    } else {
      this._name = name;
    }
  }

  set code(c) {
    if (typeof c !== 'string') {
      throw new TypeError('Code must be a string');
    } else {
      this._code = c;
    }
  }

  get code() {
    return this._code;
  }

  set name(n) {
    if (typeof n !== 'string') {
      throw new TypeError('Name must be a string');
    } else {
      this._name = n;
    }
  }

  get name() {
    return this._name;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
