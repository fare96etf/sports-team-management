import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IEmployee } from "../models/employees.models";
import { BaseApiService } from "../shared/services/base-api.service";

@Injectable({providedIn:'root'})
export class EmployeesApiService extends BaseApiService {
    private employeesBaseUrl = "employees";

    constructor (http: HttpClient) {
        super(http);
    }

    getEmployees(filter: string = '') : Observable<any> {
        const url = this.getBaseEmployeesUrl();
        let params = new HttpParams().set('filter', filter);
        return this.get<any>(url, params);
    }

    insertEmployee(employee: IEmployee) : Observable<any> {
        const url = this.getBaseEmployeesUrl();
        return this.post<boolean>(url, employee);
    }

    private getBaseEmployeesUrl() {
        return `${this.getBaseUrl()}${this.employeesBaseUrl}`;
    }
}