export class Score {
    id: number;
    matchId: number;
    playerId: number;

    constructor(id, matchId, playerId) {
        this.id = id;
        this.matchId = matchId;
        this.playerId = playerId;
    }
}