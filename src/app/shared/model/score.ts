export class Score {
    id: number;
    matchId: number;
    playerId: number;
    score: boolean = false;

    constructor(id, matchId, playerId, score?: boolean) {
        this.id = id;
        this.matchId = matchId;
        this.playerId = playerId;
        this.score = score;
    }
}