interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    readonly fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    readonly location: string;
    [key: string]: any;
}

interface Directors extends Teacher {
    numberOfReports: number;
}

interface PrintTeacherFunction {
    (firstName: string, lastName: string): string;
  }

const  printTeacher: PrintTeacherFunction = (firstName: string, lastName: string): string => `${firstName[0]}. ${lastName}`;

interface studentConstructor {
    new(firstName: string, lastName: string): StudentClass;
}

interface Student extends StudentClass {
    workOnHomework(): string;
    displayName(): string;
}
class StudentClass {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    workOnHomework() {
        return 'Currently working'
    }
    displayName() {
        return this.firstName
    }
}