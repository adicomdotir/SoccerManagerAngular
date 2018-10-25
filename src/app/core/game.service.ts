import { Injectable } from "@angular/core";
import { StorageService } from "./storage.service";
import { Match } from "../shared/model/match";
import { Player } from "../shared/model/player";
import { Score } from "../shared/model/score";

@Injectable()
export class GameService {

    constructor(private storageService: StorageService) { }

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
            homeGK.playedGK++;
            const awayGK = awayPlayers[0];
            awayGK.playedGK++;
            for (let j = 1; j <= 5; j++) {
                const homePlayer = homePlayers[j];
                //
                homePlayer.playedPlayer++;
                //
                let homeScore = Math.floor(Math.random() * homePlayer.overall);
                let awayScore = Math.floor(Math.random() * awayGK.overall);
                if (homeScore > awayScore) {
                    //
                    homePlayer.scored++;
                    awayGK.conceded++;
                    //
                    homeGoal++;
                    const score = new Score(scores.length + 1, match.id, homePlayer.id);
                    scores.push(score);
                }
                const awayPlayer = awayPlayers[j];
                //
                awayPlayer.playedPlayer++;
                //
                homeScore = Math.floor(Math.random() * homeGK.overall);
                awayScore = Math.floor(Math.random() * awayPlayer.overall);
                if (homeScore < awayScore) {
                    //
                    awayPlayer.scored++;
                    homeGK.conceded++;
                    //
                    awayGoal++;
                    const score = new Score(scores.length + 1, match.id, awayPlayer.id);
                    scores.push(score);
                }
            }
            match.homeTeamGoal = homeGoal;
            match.awayTeamGoal = awayGoal;
            this.updateTable(match);
        }
        this.sortTable();
        this.storageService.setPlayers(players);
        this.storageService.setMatches(matches);
        this.storageService.setScores(scores);
    }

    updateTable(match: Match) {
        const table = this.storageService.getTable();
        if (match.homeTeamGoal === match.awayTeamGoal) {
            const homeTeam = table.filter(x => x.teamId === match.homeTeamId)[0];
            homeTeam.game++;
            homeTeam.draw++;
            homeTeam.gf += match.homeTeamGoal;
            homeTeam.ga += match.awayTeamGoal;
            homeTeam.gd = homeTeam.gf - homeTeam.ga;
            homeTeam.points++;
            const awayTeam = table.filter(x => x.teamId === match.awayTeamId)[0];
            awayTeam.game++;
            awayTeam.draw++;
            awayTeam.gf += match.awayTeamGoal;
            awayTeam.ga += match.homeTeamGoal;
            awayTeam.gd = awayTeam.gf - awayTeam.ga;
            awayTeam.points++;
        } else if (match.homeTeamGoal > match.awayTeamGoal) {
            const homeTeam = table.filter(x => x.teamId === match.homeTeamId)[0];
            homeTeam.game++;
            homeTeam.win++;
            homeTeam.gf += match.homeTeamGoal;
            homeTeam.ga += match.awayTeamGoal;
            homeTeam.gd = homeTeam.gf - homeTeam.ga;
            homeTeam.points += 3;
            const awayTeam = table.filter(x => x.teamId === match.awayTeamId)[0];
            awayTeam.game++;
            awayTeam.lose++;
            awayTeam.gf += match.awayTeamGoal;
            awayTeam.ga += match.homeTeamGoal;
            awayTeam.gd = awayTeam.gf - awayTeam.ga;
        } else {
            const homeTeam = table.filter(x => x.teamId === match.homeTeamId)[0];
            homeTeam.game++;
            homeTeam.lose++;
            homeTeam.gf += match.homeTeamGoal;
            homeTeam.ga += match.awayTeamGoal;
            homeTeam.gd = homeTeam.gf - homeTeam.ga;
            const awayTeam = table.filter(x => x.teamId === match.awayTeamId)[0];
            awayTeam.game++;
            awayTeam.win++;
            awayTeam.gf += match.awayTeamGoal;
            awayTeam.ga += match.homeTeamGoal;
            awayTeam.gd = awayTeam.gf - awayTeam.ga;
            awayTeam.points += 3;
        }
        this.storageService.setTable(table);
    }

    private sortTable() {
        const table = this.storageService.getTable();
        const size = table.length;
        // This loop for sort points
        for (let i = 0; i < size; i++) {
            for (let j = i + 1; j < size; j++) {
                if (table[j].points > table[i].points) {
                    let temp = table[j];
                    table[j] = table[i];
                    table[i] = temp;
                }
            }
        }
        // This loop for sort GD
        for (let i = 0; i < size; i++) {
            for (let j = i + 1; j < size; j++) {
                if (table[j].points === table[i].points) {
                    if (table[j].gd > table[i].gd) {
                        let temp = table[j];
                        table[j] = table[i];
                        table[i] = temp;
                    }
                }
            }
        }
        // This loop for sort GF
        for (let i = 0; i < size; i++) {
            for (let j = i + 1; j < size; j++) {
                if (table[j].points === table[i].points) {
                    if (table[j].gd === table[i].gd) {
                        if (table[j].gf > table[i].gf) {
                            let temp = table[j];
                            table[j] = table[i];
                            table[i] = temp;
                        }
                    }
                }
            }
        }
        this.storageService.setTable(table);
    }
}