#!/usr/bin/node

/**
 * Creates a report object based on the provided employees list.
 *
 * @param {Object} employeesList - The list of employees
 * @return {Object} The report object containing all employees and a method to get the number of departments
 */
export default function createReportObject(employeesList) {
    return {
      allEmployees: {
        ...employeesList
      },
      /**
       * Get the number of departments.
       *
       * @return {number} the number of departments
       */
      getNumberOfDepartments(employeesList) {
        return Object.keys(employeesList).length;
      }
    };
  }
