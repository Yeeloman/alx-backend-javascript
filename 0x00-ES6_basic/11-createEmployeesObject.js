#!/usr/bin/node

/**
 * Function to create an object with a department name and a list of employees.
 *
 * @param {string} departmentName - The name of the department
 * @param {array} employees - The list of employees
 * @return {object} The department object
 */
export default function createEmployeesObject(departmentName, employees) {
    return{
        [departmentName]: employees
    };
}