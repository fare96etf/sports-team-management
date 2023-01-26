import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable({providedIn:'root'})
export abstract class BaseApiService {
    private baseUrl: string = "http://localhost:5025/";

    constructor (private readonly http: HttpClient) {}

    get<TResponse> (url: string, params?: HttpParams): Observable<TResponse> {
        return this.http.get<TResponse>(url, { params: params });
    }

    getWithHeaders<TResponse> (url: string, headers?: HttpHeaders): Observable<TResponse> {
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

    protected getBaseUrl() {
        return this.baseUrl;
    }
}