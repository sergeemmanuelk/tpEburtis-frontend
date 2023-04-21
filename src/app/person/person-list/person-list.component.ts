import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Department } from 'src/app/model/department.model';
import { Person } from 'src/app/model/person.model';


@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {

  @Input() persons?: any;
  @Input() departments: any;
  @Output() sendPerson = new EventEmitter<Person>;
  @Output() sendPersonToUpdate = new EventEmitter<Person>;
  @Output() sendPersonIdToDelete = new EventEmitter<Person>;
  loading: boolean = true;
  visible?: boolean;
  form!: FormGroup;
  personSelected: Person = new Person(0, '', '', 0, new Department(0, '', ''));

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.buildReactiveForm();
  }

  sendToParent(person: Person) {
    this.sendPerson.emit(person);
  }

  sendPersonToUpdateToParent() {
    console.log(this.personSelected);
    this.sendPersonToUpdate.emit(this.personSelected);
  }

  sendPersonIdToParent(person: Person) {
    this.sendPersonIdToDelete.emit(person);
    console.log(person);
  }

  buildReactiveForm() {
    this.form = this.formBuilder.group({
      lastName: new FormControl('', [Validators.required]),
      firstName: new FormControl('', [Validators.required]),
      age: new FormControl('', [Validators.required]),
      department: new FormControl('', [Validators.required])
    });
  }

  showDialog(person: Person) {
    this.visible = true;
    this.personSelected = person;
  }
}
