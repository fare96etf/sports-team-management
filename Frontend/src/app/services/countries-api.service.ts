import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { BaseApiService } from "../shared/services/base-api.service";

@Injectable({providedIn:'root'})
export class CountriesApiService extends BaseApiService {
    private CountriesBaseUrl = "countries";

    constructor (http: HttpClient) {
        super(http);
    }

    getCountries() : Observable<any> {
        const url = this.getBaseCountriesUrl();
        return this.get<any>(url);
    }

    private getBaseCountriesUrl() {
        return `${this.getBaseUrl()}${this.CountriesBaseUrl}`;
    }
}