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

    getPlayer(id: number) : Observable<any> {
        const url = `${this.getBasePlayersUrl()}/${id.toString()}`;
        return this.get<any>(url);
    }

    insertPlayer(employee: IPlayer) : Observable<any> {
        const url = this.getBasePlayersUrl();
        return this.post<boolean>(url, employee);
    }

    getPlayerStats(playerId: number) : Observable<any> {
        const url =  `${this.getBasePlayersUrl()}/stats/${playerId.toString()}`;
        return this.get<any>(url);
    }

    private getBasePlayersUrl() {
        return `${this.getBaseUrl()}${this.playersBaseUrl}`;
    }
}