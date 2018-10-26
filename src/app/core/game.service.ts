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
            let homePlayers = players.filter(p => p.teamId === homeTeamId);
            homePlayers = this.selectPlayers(homePlayers);
            let awayPlayers = players.filter(p => p.teamId === awayTeamId);
            awayPlayers = this.selectPlayers(awayPlayers);
            let homeGoal = 0, awayGoal = 0;
            const homeGK = this.selectGoalkeeper(homePlayers);
            homeGK.playedGK++;
            const awayGK = this.selectGoalkeeper(awayPlayers);
            awayGK.playedGK++;
            for (let j = 1; j <= 5; j++) {
                const homePlayer = homePlayers[j];
                //
                homePlayer.playedPlayer++;
                //
                let homeScore = Math.floor(Math.random() * (homePlayer.attack + homePlayer.finish) / 2) + homePlayer.morale;
                let awayScore = Math.floor(Math.random() * (awayGK.defend + awayGK.goalkeeper) / 2) + awayGK.morale;
                if (homeScore > awayScore) {
                    //
                    homePlayer.scored++;
                    if (homePlayer.morale > 0 && homePlayer.morale < 8) {
                        homePlayer.morale++;
                    }
                    awayGK.conceded++;
                    //
                    homeGoal++;
                    const score = new Score(scores.length + 1, match.id, homePlayer.id);
                    scores.push(score);
                } else {
                    if (homePlayer.morale > 0 && homePlayer.morale < 8) {
                        homePlayer.morale--;
                    }
                }
                const awayPlayer = awayPlayers[j];
                //
                awayPlayer.playedPlayer++;
                //
                homeScore = Math.floor(Math.random() * (homeGK.defend + homeGK.goalkeeper) / 2) + homeGK.morale;
                awayScore = Math.floor(Math.random() * (awayPlayer.attack + awayPlayer.finish) / 2) + awayPlayer.morale;
                if (homeScore < awayScore) {
                    //
                    awayPlayer.scored++;
                    if (awayPlayer.morale > 0 && awayPlayer.morale < 8) {
                        awayPlayer.morale++;
                    }
                    homeGK.conceded++;
                    //
                    awayGoal++;
                    const score = new Score(scores.length + 1, match.id, awayPlayer.id);
                    scores.push(score);
                } else {
                    if (awayPlayer.morale > 0 && awayPlayer.morale < 8) {
                        awayPlayer.morale--;
                    }
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

    private selectPlayers(customPlayers: Player[]): Player[] {
        return customPlayers.sort((b, a) => {
            return (a.attack + a.finish) - (b.attack + b.finish)
        });
    }

    private selectGoalkeeper(customPlayers: Player[]): Player {
        return customPlayers.sort((b, a) => {
            return (a.goalkeeper + a.defend) - (b.goalkeeper + b.defend)
        })[0];
    }

    private updateTable(match: Match) {
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