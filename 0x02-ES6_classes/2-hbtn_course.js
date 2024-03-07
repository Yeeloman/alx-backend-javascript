export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;
  }

  set name(name) {
    if (name instanceof String) {
      this._name = name;
    } else {
        throw new TypeError('Name must be a string');
    }
  }

  get name() {
    return this._name;
  }

  set length(length) {
    if (length instanceof Number) {
      this._length = length;
    } else {
        throw new TypeError('Length must be a number');
    }
  }

  get length() {
    return this._length;
  }

  set students(students) {
    if (students instanceof Array) {
      this._students = students;
    } else {
        throw new TypeError('students must be an array');
    }
  }

  get students() {
    return this._students;
  }
}
