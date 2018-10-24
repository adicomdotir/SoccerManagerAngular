export class Match {
    id: number;
    week: number;
    homeTeamId: number;
    awayTeamId: number;
    homeTeamGoal: number = -1;
    awayTeamGoal: number = -1;

    constructor(id, week, homeTeamId, awayTeamId) {
        this.id = id;
        this.week = week;
        this.homeTeamId = homeTeamId;
        this.awayTeamId = awayTeamId;
    }
}