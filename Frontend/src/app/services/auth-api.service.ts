import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BaseApiService } from "../shared/services/base-api.service";
import { Observable } from "rxjs";
import { IUserRegistration } from "../models/auth.models";

@Injectable({providedIn:'root'})
export class AuthApiService extends BaseApiService {
    private AuthBaseUrl = "auth";

    constructor (http: HttpClient) {
        super(http);
    }

    registerUser(user: IUserRegistration) : Observable<any> {
        const url = `${this.getBaseAuthUrl()}/registration`;
        return this.post<boolean>(url, user);
    }

    private getBaseAuthUrl() {
        return `${this.getBaseUrl()}${this.AuthBaseUrl}`;
    }
}