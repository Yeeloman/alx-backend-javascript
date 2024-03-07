export default class Building {
  constructor(sqft) {
    this._sqft = sqft;
    if (this.constructor !== Building && this.has(evacuationWarningMessage)) {
      throw new TypeError('Class extending Building must override evacuationWarningMessage');
    }
  }

  set sqft(sq) {
    this._sqft = sq;
  }

  get sqft() {
    return this._sqft;
  }
}
