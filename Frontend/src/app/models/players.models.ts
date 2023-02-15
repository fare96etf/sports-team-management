export interface IPlayer {
    fullName: string,
    firstName: string,
    lastName: string,
    dateOfBirth: Date,
    number: number,
    position: string
}

export interface IPlayerStats {
    competitionId: number,
    season: string,
    appearances: number,
    substituteAppearances: number,
    goals: number,
    assists: number,
    yellowCards: number,
    redCards: number
}