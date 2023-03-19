export interface IGame {
    id: number,
    time: Date,
    isCompleted: boolean,
    isHomeGame: boolean,
    team1: string,
    team2: string,
    result: string,
    competitionName: string,
    competitionRound: string,
    spectators: number
}

export interface IGameFilter {
    filter: string,
    competitionId?: string | null
}