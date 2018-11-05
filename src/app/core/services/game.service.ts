import { Injectable } from "@angular/core";
import { StorageService } from "./storage.service";
import { Match } from "../../shared/model/match";
import { Player } from "../../shared/model/player";
import { Score } from "../../shared/model/score";
import * as DATA from "../../config/localdata";
import { User } from "../../shared/model/user";
import { Table } from "../../shared/model/table";
import { Subject } from "rxjs";
import { PlayerHistory } from "../../shared/model/playerHistory";
import { GeneratorService } from "./generator.service";

@Injectable()
export class GameService {
    size: number;

    newSeasonSubject = new Subject();
    $newSeasonSubject = this.newSeasonSubject.asObservable();

    constructor(private storageService: StorageService, private generator: GeneratorService) {
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
            if (homeGK.experience < 8) {
                homeGK.experience += 0.05;
            }
            const awayGK = this.selectGoalkeeper(awayPlayers);
            awayGK.playedGK++;
            if (awayGK.experience < 8) {
                awayGK.experience += 0.05;
            }
            for (let j = 0; j < 5; j++) {
                const homePlayer = homePlayers[j];
                //
                homePlayer.playedPlayer++;
                if (homePlayer.experience < 8) {
                    homePlayer.experience += 0.05;
                }
                //
                let homeScore = Math.floor(Math.random() * (homePlayer.attack + homePlayer.finish) / 2) + homePlayer.morale + homePlayer.experience;
                homeScore += Math.floor((homePlayer.attention + homePlayer.creativity) / 2);
                let awayScore = Math.floor(Math.random() * (awayGK.defend + awayGK.goalkeeper) / 2) + awayGK.morale + awayGK.experience;
                homeScore += Math.floor((awayGK.attention + awayGK.creativity) / 2);
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
                if (awayPlayer.experience < 8) {
                    awayPlayer.experience += 0.05;
                }
                //
                homeScore = Math.floor(Math.random() * (homeGK.defend + homeGK.goalkeeper) / 2) + homeGK.morale + homeGK.experience;
                homeScore += Math.floor((homeGK.attention + homeGK.creativity) / 2);
                awayScore = Math.floor(Math.random() * (awayPlayer.attack + awayPlayer.finish) / 2) + awayPlayer.morale + awayPlayer.experience;
                homeScore += Math.floor((awayPlayer.attention + awayPlayer.creativity) / 2);
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
        const playerHistories = this.storageService.getPlayerHistories();
        const user = this.storageService.getUser();
        const teams = this.storageService.getTeams();

        user.season++;
        this.storageService.setUser(user);
        this.newSeasonSubject.next();
        let players = this.storageService.getPlayers();
        players.map(p => {
            if (p.age > 30) {
                p.attack = (p.attack > 0) ? p.attack -= 1 : 0;
                p.defend = (p.defend > 0) ? p.defend -= 1 : 0;
                p.finish = (p.finish > 0) ? p.finish -= 1 : 0;
                p.goalkeeper = (p.goalkeeper > 0) ? p.goalkeeper -= 1 : 0;
                p.overall = p.attack + p.defend + p.finish + p.goalkeeper;
            }
            p.age += 1;
            p.salary = this.generator.calculateSalary(p);
            p.price = this.generator.calculatePrice(p.overall, p.age);

            if (p.retired == false) {
                const ph = new PlayerHistory();
                ph.id = playerHistories.length + 1;
                ph.season = user.season - 1;
                ph.playerId = p.id;
                ph.playedGK = p.playedGK;
                ph.playedPlayer = p.playedPlayer;
                ph.scored = p.scored;
                ph.conceded = p.conceded;
                ph.teamId = p.teamId;
                p.playedGK = 0;
                p.playedPlayer = 0;
                p.scored = 0;
                p.conceded = 0;
                playerHistories.push(ph);
            }
        });
        this.storageService.setPlayerHistories(playerHistories);
        const retireds = players.filter(x => x.age > 36).filter(x => x.retired == false);
        for (const item of retireds) {
            item.retired = true;
            item.salary = 0;
            item.price = 0;
            const numbers = teams[item.teamId - 1].shirtNumber;
            const i = numbers.indexOf(item.number);
            numbers.splice(i, 1);
            item.number = -1;
            let id = Math.max.apply(Math, players.map((o) => { return o.id; })) + 1;
            const pl = this.generator.createPlayer(id, item.teamId, true);
            players.push(pl);
        }
        this.storageService.setPlayers(players);
        this.storageService.setTeams(teams);
        console.log(teams)

        this.calculateBudget();
        this.generateMatches();
        this.generateTable();
        this.resetScores();
        this.gameCycle();
    }

    calculateBudget() {
        const teams = this.storageService.getTeams();
        const players = this.storageService.getPlayers().filter(x => x.retired == false);
        players.forEach(p => {
            teams[p.teamId - 1].budget -= p.salary;
        });
        this.storageService.setTeams(teams);
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
