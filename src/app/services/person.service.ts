import { Injectable } from "@angular/core";
import { ApiService } from "./api.service";
import { Person } from "../model/person.model";

@Injectable({
    providedIn: 'root'
})
export class PersonService {

    private model = 'person';

    constructor(private api: ApiService) {}
    
    all() {
        return this.api.all(this.model);
    }

    save(person: Person) {
        return this.api.save(this.model, person);
    }

    update(id: number, person: Person) {
        return this.api.update(this.model, id, person);
    }

    delete(id: number) {
        return this.api.delete(this.model, id);
    }
}