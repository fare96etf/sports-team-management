import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { BaseApiService } from "../shared/services/base-api.service";

@Injectable({providedIn:'root'})
export class EmployeesApiService extends BaseApiService {
    constructor (http: HttpClient) {
        super(http);
    }

    getEmployees () : Observable<any> {
        const url = 'http://localhost:5025/employees';
        return this.get<any>(url);
    }
}