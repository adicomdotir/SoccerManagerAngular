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
import { TopScorer } from "../../shared/model/topscorer";

@Injectable()
export class GameService {
    size: number;

    newSeasonSubject = new Subject();
    $newSeasonSubject = this.newSeasonSubject.asObservable();
    endSeasonSubject = new Subject();
    $endSeasonSubject = this.endSeasonSubject.asObservable();

    constructor(private storageService: StorageService, private generator: GeneratorService) {
        let user: User = storageService.getUser();
        this.size = user.size;
    }

    gameCycle() {
        const user: User = this.storageService.getUser();
        let matches: Match[] = this.storageService.getMatches();
        let otherMatches = matches.filter(x => x.week != user.week);
        matches = matches.filter(x => x.week == user.week);

        const players: Player[] = this.storageService.getPlayers();
        let scores: Score[] = this.storageService.getScores();
        if (scores == null) scores = [];

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
                awayScore += Math.floor((awayGK.attention + awayGK.creativity) / 2);
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
                    this.updateGoalForPlayer(homePlayer.id, match.div);
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
                awayScore += Math.floor((awayPlayer.attention + awayPlayer.creativity) / 2);
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
                    this.updateGoalForPlayer(awayPlayer.id, match.div);
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
        matches = matches.concat(otherMatches);
        this.storageService.setMatches(matches);
        this.storageService.setScores(scores);
        user.week++;
        this.storageService.setUser(user);
        if (user.week > 14) {
            this.endSeasonSubject.next();
        }
    }

    NewSeason() {
        this.teamsPrice();
        this.PromoteAndRelegate();

        const playerHistories = this.storageService.getPlayerHistories();
        const user = this.storageService.getUser();
        const teams = this.storageService.getTeams();
        user.week = 1;
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
                p.overall = p.attack + p.defend + p.finish + p.goalkeeper + p.creativity + p.attention;
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

        this.calculateBudget();
        this.generator.generateMatches();
        this.generator.resetTable();
        this.resetScores();
        this.storageService.setTopscorer([]);

        this.endSeasonSubject.next();
        // this.gameCycle();
    }

    private teamsPrice() {
        const teams = this.storageService.getTeams();
        const table = this.storageService.getTable();
        const div1 = table.filter(x => x.teamDiv == 1);
        for (let i = 0; i < div1.length; i++) {
            const element = div1[i];
            teams.filter(x => x.id == element.teamId)[0].budget += 20000000 - i * 500000;
        }
        const div2 = table.filter(x => x.teamDiv == 2);
        for (let i = 0; i < div2.length; i++) {
            const element = div2[i];
            teams.filter(x => x.id == element.teamId)[0].budget += 16000000 - i * 500000;
        }
        const div3 = table.filter(x => x.teamDiv == 3);
        for (let i = 0; i < div3.length; i++) {
            const element = div3[i];
            teams.filter(x => x.id == element.teamId)[0].budget += 12000000 - i * 500000;
        }
        const div4 = table.filter(x => x.teamDiv == 4);
        for (let i = 0; i < div4.length; i++) {
            const element = div4[i];
            teams.filter(x => x.id == element.teamId)[0].budget += 8000000 - i * 500000;
        }
        const div5 = table.filter(x => x.teamDiv == 5);
        for (let i = 0; i < div5.length; i++) {
            const element = div5[i];
            teams.filter(x => x.id == element.teamId)[0].budget += 4000000 - i * 500000;
        }
        this.storageService.setTeams(teams);
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

    private updateGoalForPlayer(playerId, div) {
        let topscorer = this.storageService.getTopscorer();
        if (topscorer == null) {
            topscorer = [];
        } else {
            const temp = topscorer.filter(x => x.playerId == playerId);
            if (temp.length > 0) {
                temp[0].goal++;
            } else {
                let newTopscorer = new TopScorer(playerId, 1, div);
                topscorer.push(newTopscorer);
            }
        }
        this.storageService.setTopscorer(topscorer);
    }

    private PromoteAndRelegate() {
        const teams = this.storageService.getTeams();
        const table = this.storageService.getTable();
        const div1 = table.filter(x => x.teamDiv == 1);
        const div2 = table.filter(x => x.teamDiv == 2);
        const div3 = table.filter(x => x.teamDiv == 3);
        const div4 = table.filter(x => x.teamDiv == 4);
        const div5 = table.filter(x => x.teamDiv == 5);
        div2[0].teamDiv = 1;
        teams.filter(x => x.id == div2[0].teamId).map(x => x.div = 1);
        div3[0].teamDiv = 2;
        teams.filter(x => x.id == div3[0].teamId).map(x => x.div = 2);
        div4[0].teamDiv = 3;
        teams.filter(x => x.id == div4[0].teamId).map(x => x.div = 3);
        div5[0].teamDiv = 4;
        teams.filter(x => x.id == div5[0].teamId).map(x => x.div = 4);
        div1[7].teamDiv = 2;
        teams.filter(x => x.id == div1[7].teamId).map(x => x.div = 2);
        div2[7].teamDiv = 3;
        teams.filter(x => x.id == div2[7].teamId).map(x => x.div = 3);
        div3[7].teamDiv = 4;
        teams.filter(x => x.id == div3[7].teamId).map(x => x.div = 4);
        div4[7].teamDiv = 5;
        teams.filter(x => x.id == div4[7].teamId).map(x => x.div = 5);
        this.storageService.setTeams(teams);
        this.storageService.setTable(table);
    }

    getClass(index) {
        if (index == 0) {
            return 'table-success';
        } else if (index == 1) {
            // return 'table-second';
        } else if (index == 6) {
            // return 'table-warning';
        } else if (index == 7) {
            return 'table-danger';
        }
        return '';
    }
}
