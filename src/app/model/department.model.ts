export class Department {
    id: number;
    code: string;
    designation: string;

    constructor(id: number, code: string, designation: string) {
        this.id = id;
        this.code = code;
        this.designation = designation;
    }
}