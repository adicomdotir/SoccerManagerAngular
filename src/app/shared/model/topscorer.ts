export class TopScorer {
    playerId: number;
    goal: number;
    div: number;

    constructor(playerId, goal, div) {
        this.playerId = playerId;
        this.goal = goal;
        this.div = div;
    }
}