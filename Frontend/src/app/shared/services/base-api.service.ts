import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable({providedIn:'root'})
export abstract class BaseApiService {
    constructor (private readonly http: HttpClient) {}

    get<TResponse> (url: string, headers?: HttpHeaders): Observable<TResponse> {
        return this.http.get<TResponse>(url, { headers });
    }

    post<TResponse> (url: string, body: any, headers?: HttpHeaders): Observable<TResponse> {
        return this.http.post<TResponse>(url, body, { headers });
    }

    put<TResponse> (url: string, body: any, headers?: HttpHeaders): Observable<TResponse> {
        return this.http.put<TResponse>(url, body, { headers: headers });
    } 

    delete<TResponse> (url: string, headers?: HttpHeaders): Observable<TResponse> {
        return this.http.put<TResponse>(url, { headers });
    } 
}