import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { HttpHeaders } from "@angular/common/http";
import { Person } from "../model/person.model";

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    private apiUrl = 'http://localhost:8081/api';

    constructor(private http: HttpClient) {}

    getUrl(model: string) {
        return `${this.apiUrl}/${model}`;
    }

    getUrlWithId(model: string, id: number) {
        return `${this.getUrl(model)}/${id}`;
    }

    save(model: string, object: Person) {
        return this.http.post(this.getUrl(model), object, {headers: this.httpHeader()});
    }

    all(model: string) {
        return this.http.get(this.getUrl(model), {headers: this.httpHeader()});
    }

    find(model: string, id: number) {
        return this.http.get(this.getUrlWithId(model, id), {headers: this.httpHeader()});
    }

    update(model: string, id: number, person : Person) {
        return this.http.put(this.getUrlWithId(model, id), person, {headers: this.httpHeader()});
    }

    delete(model: string, id: number) {
        return this.http.delete(this.getUrlWithId(model, id), {headers: this.httpHeader()});
    }
    
    httpHeader() {
		return new HttpHeaders({
			'Content-Type': 'application/json',
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT, DELETE',
			'Accept': 'application/json',
		});
	}
}