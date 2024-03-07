export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;
  }

  set name(name) {
    if (name instanceof String) {
      this._name = name;
    }
  }

  get name() {
    return this._name;
  }

  set length(length) {
    if (length instanceof Number) {
      this._length = length;
    }
  }

  get length() {
    return this._length;
  }

  set students(students) {
    if (students instanceof Array) {
      this._students = students;
    }
  }

  get students() {
    return this._students;
  }
}
