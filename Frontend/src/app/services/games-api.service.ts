import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IGameFilter } from "../models/games.models";
import { BaseApiService } from "../shared/services/base-api.service";

@Injectable({providedIn:'root'})
export class GamesApiService extends BaseApiService {
    private gamesBaseUrl = "games";

    constructor (http: HttpClient) {
        super(http);
    }

    getGames(filter: IGameFilter) : Observable<any> {
        const url = this.getBaseGamesUrl();
        let params = new HttpParams()
        
        params = params.set('filter', filter.filter)
        params = params.set('competitionId', filter.competitionId ?? "0");
        
        return this.get<any>(url, params);
    }

    getGame(id: string) : Observable<any> {
        const url = `${this.getBaseGamesUrl()}/${id}`;
        return this.get<any>(url);
    }

    private getBaseGamesUrl() {
        return `${this.getBaseUrl()}${this.gamesBaseUrl}`;
    }
}