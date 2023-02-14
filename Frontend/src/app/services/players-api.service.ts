import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IPlayer } from "../models/players.models";
import { BaseApiService } from "../shared/services/base-api.service";

@Injectable({providedIn:'root'})
export class PlayersApiService extends BaseApiService {
    private playersBaseUrl = "players";

    constructor (http: HttpClient) {
        super(http);
    }

    getPlayers(filter: string = '') : Observable<any> {
        const url = this.getBasePlayersUrl();
        let params = new HttpParams().set('filter', filter);
        return this.get<any>(url, params);
    }

    insertPlayer(employee: IPlayer) : Observable<any> {
        const url = this.getBasePlayersUrl();
        return this.post<boolean>(url, employee);
    }

    private getBasePlayersUrl() {
        return `${this.getBaseUrl()}${this.playersBaseUrl}`;
    }
}