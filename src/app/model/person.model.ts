import { Department } from "./department.model";

export class Person {
    public id: number;
    public firstName: string;
    public lastName: string;
    public age: number;
    public department: Department;

    constructor(id: number, firstName: string, lastName: string, age: number, department: Department) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.department = department;
    }
}