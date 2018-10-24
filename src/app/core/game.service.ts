import { Injectable } from "@angular/core";
import { StorageService } from "./storage.service";
import { Match } from "../shared/model/match";
import { Player } from "../shared/model/player";
import { Score } from "../shared/model/score";

@Injectable()
export class GameService {

    constructor(private storageService: StorageService) {}

    gameCycle() {
        const matches: Match[] = this.storageService.getMatches();
        const players: Player[] = this.storageService.getPlayers();
        const scores: Score[] = [];
        for (let i = 0; i < matches.length; i++) {
            const match: Match = matches[i];
            const homeTeamId = match.homeTeamId;
            const awayTeamId = match.awayTeamId;
            const homePlayers = players.filter(p => p.teamId === homeTeamId);
            const awayPlayers = players.filter(p => p.teamId === awayTeamId);
            let homeGoal = 0, awayGoal = 0;
            const homeGK = homePlayers[0];
            const awayGK = awayPlayers[0];
            for (let j = 1; j <= 5; j++) {
                const homePlayer = homePlayers[j];
                let homeScore = Math.floor(Math.random() * homePlayer.overall);
                let awayScore = Math.floor(Math.random() * awayGK.overall);
                if (homeScore > awayScore) {
                    homeGoal++;
                    const score = new Score(scores.length + 1, match.id, homePlayer.id);
                    scores.push(score);
                }
                const awayPlayer = awayPlayers[j];
                homeScore = Math.floor(Math.random() * homeGK.overall);
                awayScore = Math.floor(Math.random() * awayPlayer.overall);
                if (homeScore < awayScore) {
                    awayGoal++;
                    const score = new Score(scores.length + 1, match.id, awayPlayer.id);
                    scores.push(score);
                }
            }
            match.homeTeamGoal = homeGoal;
            match.awayTeamGoal = awayGoal;
        }
        this.storageService.setMatches(matches);
        this.storageService.setScores(scores);
    }

    
}