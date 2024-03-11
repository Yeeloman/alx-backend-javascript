/* eslint-disable */
class student {
  constructor(id, firstName, location) {
    this.id = id;
    this.firstName = firstName;
    this.location = location;
  }
}

export default function getListStudents() {
  const students = [
    new student(1, 'Guillaume', 'San Francisco'),
    new student(2, 'James', 'Columbia'),
    new student(5, 'Serena', 'New York'),
  ];
  return students;
}
