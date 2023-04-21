import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Person } from 'src/app/model/person.model';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit {
  
  visible?: boolean;
  form!: FormGroup;
  @Output() personEvent = new EventEmitter<Person>;
  @Input() departments: any[] = [];
  filteredDepartment: any;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.buildReactiveForm();
  }

  buildReactiveForm() {
    this.form = this.formBuilder.group({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      age: new FormControl('', [Validators.required]),
      department: new FormControl('', [Validators.required])
    });
  }

  onSubmit() {
    if(this.form.valid) {
      console.log(this.form.value);
      this.emit(this.form.value as Person);
    }
  }

  emit(person: Person) {
    this.personEvent.emit(person);
  }

  showDialog() {
    this.visible = true;
  }

  filterDepartment(event: any) {
    const query = event.query; // récupérer la chaîne de caractère rentrer par l'utilisateur
    const filtered = this.departments.filter((department: any) => department.designation.toLowerCase().includes(query.toLowerCase()));
    this.filteredDepartment = filtered;
    console.log(filtered);
  }
}
