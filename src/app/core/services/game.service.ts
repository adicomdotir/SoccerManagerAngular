import { Injectable } from "@angular/core";
import { StorageService } from "./storage.service";
import { Match } from "../../shared/model/match";
import { Player } from "../../shared/model/player";
import { Score } from "../../shared/model/score";
import * as DATA from "../../config/localdata";
import { User } from "../../shared/model/user";
import { Table } from "../../shared/model/table";

@Injectable()
export class GameService {
    size: number;

    constructor(private storageService: StorageService) { 
        let user: User = storageService.getUser();
        this.size = user.size;
    }

    gameCycle() {
        const matches: Match[] = this.storageService.getMatches();
        const players: Player[] = this.storageService.getPlayers();
        const scores: Score[] = [];
        for (let i = 0; i < matches.length; i++) {
            const match: Match = matches[i];
            const homeTeamId = match.homeTeamId;
            const awayTeamId = match.awayTeamId;
            let homePlayers = players.filter(p => p.teamId === homeTeamId);
            homePlayers = this.selectPlayers(homePlayers).filter(x => x.retired == false);
            let awayPlayers = players.filter(p => p.teamId === awayTeamId);
            awayPlayers = this.selectPlayers(awayPlayers).filter(x => x.retired == false);
            let homeGoal = 0, awayGoal = 0;
            const homeGK = this.selectGoalkeeper(homePlayers);
            homeGK.playedGK++;
            const awayGK = this.selectGoalkeeper(awayPlayers);
            awayGK.playedGK++;
            for (let j = 0; j < 5; j++) {
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
                    const score = new Score(scores.length + 1, match.id, homePlayer.id, true);
                    scores.push(score);
                } else {
                    if (homePlayer.morale > 0 && homePlayer.morale < 8) {
                        homePlayer.morale--;
                    }
                    const score = new Score(scores.length + 1, match.id, homePlayer.id);
                    scores.push(score);
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
                    const score = new Score(scores.length + 1, match.id, awayPlayer.id, true);
                    scores.push(score);
                } else {
                    if (awayPlayer.morale > 0 && awayPlayer.morale < 8) {
                        awayPlayer.morale--;
                    }
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

    NewSeason() {
        let players = this.storageService.getPlayers();
        players.map(p => {
            p.age += 1;
        });
        const retireds = players.filter(x => x.age > 36).filter(x => x.retired == false);
        for (const item of retireds) {
            item.retired = true;
            const pl = new Player();
            pl.id = Math.max.apply(Math, players.map((o) => { return o.id; })) + 1;
            const fn = Math.floor(Math.random() * DATA.firstName.length);
            const ln = Math.floor(Math.random() * DATA.lastName.length);
            pl.name = DATA.firstName[fn] + ' ' + DATA.lastName[ln];
            pl.age = 18;
            pl.attack = Math.floor(Math.random() * 20) + 1;
            pl.defend = Math.floor(Math.random() * 20) + 1;
            pl.goalkeeper = Math.floor(Math.random() * 20) + 1;
            pl.finish = Math.floor(Math.random() * 20) + 1;
            pl.morale = 4;
            pl.overall = pl.attack + pl.defend + pl.goalkeeper + pl.finish;
            pl.teamId = item.teamId;
            pl.national = DATA.countries[Math.floor(Math.random() * DATA.countries.length)];
            pl.number = Math.floor(Math.random() * 99) + 1;
            players.push(pl);
        }
        this.storageService.setPlayers(players);
        this.generateMatches();
        this.generateTable();
        this.resetScores();
        this.gameCycle();
    }

    resetScores() {
        this.storageService.setScores([]);
    }

    private selectPlayers(customPlayers: Player[]): Player[] {
        return customPlayers.sort((b, a) => {
            return (a.attack + a.finish) - (b.attack + b.finish)
        });
    }

    private selectGoalkeeper(customPlayers: Player[]): Player {
        let newArray = customPlayers.map(a => Object.assign({}, a));
        newArray = newArray.filter(x => x.retired == false);
        const temp = newArray.sort((b, a) => {
            return (a.goalkeeper + a.defend) - (b.goalkeeper + b.defend)
        })[0];
        return customPlayers.filter(x => x.id == temp.id)[0];
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

    generateMatches() {
        const temp: number[] = [];
        const matches: Match[] = [];
        for (let i = 1; i <= this.size; i++) {
            temp.push(i);
        }
        // Week 
        for (let i = 1; i <= (this.size - 1) * 2; i++) {
            // Match
            for (let j = 0; j < this.size / 2; j++) {
                const matchTemp = new Match(matches.length + 1, i, temp[j], temp[this.size - 1 - j]);
                matches.push(matchTemp);
            }
            this.swapWeek(temp);
        }
        this.storageService.setMatches(matches);
    }

    swapWeek(temp: number[]) {
        let lastTeamId = temp[this.size - 1];
        for (let i = this.size - 1; i > 0; i--) {
            temp[i] = temp[i - 1];
        }
        temp[1] = lastTeamId;
    }

    generateTable() {
        const table: Table[] = [];
        for (let i = 1; i <= this.size; i++) {
            const temp = new Table();
            temp.id = table.length + 1;
            temp.teamId = i;
            table.push(temp);
        }
        this.storageService.setTable(table);
    }
}