function task_printer (num) {
  console.log(`############# ${num} #############`);
}

task_printer(0);

const displayMessage = require('./0-console');

displayMessage('Hello NodeJS!');

task_printer(2);

const countStudents = require('./2-read_file');

countStudents('database.csv');

task_printer(3);

// const countStudents = require('./3-read_file_async');
//
// countStudents("database.csv")
//     .then(() => {
//         console.log("Done!");
//     })
//         .catch((error) => {
//         console.log(error);
//     });
// console.log("After!");

task_printer(5);
