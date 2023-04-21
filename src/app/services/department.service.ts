import { Injectable } from "@angular/core";
import { ApiService } from "./api.service";

@Injectable({
    providedIn: 'root'
})
export class DepartmentService {

    private model = 'department';

    constructor(private api: ApiService) {}
    
    all() {
        return this.api.all(this.model);
    }
}