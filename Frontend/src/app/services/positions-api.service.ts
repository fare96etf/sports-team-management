import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { BaseApiService } from "../shared/services/base-api.service";

@Injectable({providedIn:'root'})
export class PositionsApiService extends BaseApiService {
    private PlayersBaseUrl = "positions";

    constructor (http: HttpClient) {
        super(http);
    }

    getPositions() : Observable<any> {
        const url = this.getBasePositionsUrl();
        return this.get<any>(url);
    }

    private getBasePositionsUrl() {
        return `${this.getBaseUrl()}${this.PlayersBaseUrl}`;
    }
}