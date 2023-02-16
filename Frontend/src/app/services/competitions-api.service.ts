import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { BaseApiService } from "../shared/services/base-api.service";

@Injectable({providedIn:'root'})
export class CompetitionsApiService extends BaseApiService {
    private CompetitionsBaseUrl = "competitions";

    constructor (http: HttpClient) {
        super(http);
    }

    getCompetitions() : Observable<any> {
        const url = this.getBaseCompetitionsUrl();
        return this.get<any>(url);
    }

    private getBaseCompetitionsUrl() {
        return `${this.getBaseUrl()}${this.CompetitionsBaseUrl}`;
    }
}