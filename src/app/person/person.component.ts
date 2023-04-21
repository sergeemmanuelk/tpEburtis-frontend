import { Component, OnInit } from '@angular/core';
import { PersonService } from '../services/person.service';
import { DepartmentService } from '../services/department.service';
import { Person } from '../model/person.model';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  
  persons: any[] = [];
  departments: any[] = [];

  constructor(private personService: PersonService, private departmentService: DepartmentService) { }

  ngOnInit(): void {
    this.personService.all().subscribe({
      next:(response: any) => {
        this.persons = response;
      }
    })

    this.departmentService.all().subscribe({
      next:(response: any) => {
        this.departments = response;
      }
    })

    //this.all();
    //this.allDepartement();
  }

  save(person: Person) {
    this.personService.save(person).subscribe((response: any) => {
      console.log(response.message);
    });
  }

  update(person: Person) {
    this.personService.update(person.id as number, new Person(person.id, person.firstName, person.lastName, person.age, person.department))
      .subscribe((response: any) => {
        console.log(response.message);
    });
  }

  delete(person: Person) {
    this.personService.delete(person.id as number).subscribe((response: any) => {
      console.log(response.message);
    });
    console.log(person);
  }

  /*allDepartement() {
    this.departementService.all().subscribe((response) => {
      console.log(response);
      this.departements = response;
    });
  }*/
  /*all() {
    this.personneService.all().subscribe((response: any) => {
      console.log(response)
      if (response.status == 200) {
        console.log(response.message)
        this.personnes = response.data;
      }
    });
  }*/
}
