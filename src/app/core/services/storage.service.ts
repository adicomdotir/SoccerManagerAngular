import { Injectable } from "@angular/core";
import { Player } from "../../shared/model/player";
import { Team } from "../../shared/model/team";
import { Match } from "../../shared/model/match";
import { Table } from "../../shared/model/table";
import { Score } from "../../shared/model/score";
import { User } from "../../shared/model/user";
import { TopScorer } from "../../shared/model/topscorer";
import { PlayerHistory } from "../../shared/model/playerHistory";
import { Router } from "@angular/router";
import * as crypto from "crypto-js";

@Injectable()
export class StorageService {
    private secret = '123456789';
    constructor(private router: Router) { }
    
    removeAllData() {
        localStorage.removeItem('matches');
        localStorage.removeItem('playerhistories');
        localStorage.removeItem('players');
        localStorage.removeItem('table');
        localStorage.removeItem('teams');
        localStorage.removeItem('topscorer');
        localStorage.removeItem('user');
        localStorage.removeItem('scores');
    }

    encrypt(route, objectString) {
        const hash = crypto.AES.encrypt(objectString, this.secret);
        localStorage.setItem(route, hash.toString());
    }

    decrypt(route) {
        const hash = localStorage.getItem(route);
        if (hash == null) return null;
        const objectString = crypto.AES.decrypt(hash, this.secret);
        return objectString.toString(crypto.enc.Utf8);
    }

    setPlayers(players: Player[]) {
        this.encrypt('players', JSON.stringify(players));
    }

    getPlayers(): Player[] {
        return JSON.parse(this.decrypt('players'));
    }

    getRetiredPlayer(): Player[] {
        return JSON.parse(this.decrypt('players')).filter(x => x.retired == true);
    }

    setTeams(teams: Team[]) {
        this.encrypt('teams', JSON.stringify(teams));
    }

    getTeams(): Team[] {
        return JSON.parse(this.decrypt('teams'));
    }

    setMatches(matches: Match[]) {
        this.encrypt('matches', JSON.stringify(matches));
    }

    getMatches(): Match[] {
        return JSON.parse(this.decrypt('matches'));
    }

    setTable(table: Table[]) {
        this.encrypt('table', JSON.stringify(table));
    }

    getTable(): Table[] {
        return JSON.parse(this.decrypt('table'));
    }

    setScores(scores: Score[]) {
        this.encrypt('scores', JSON.stringify(scores));
    }

    getScores(): Score[] {
        return JSON.parse(this.decrypt('scores'));
    }

    setPlayerHistories(playerhistories: PlayerHistory[]) {
        this.encrypt('playerhistories', JSON.stringify(playerhistories));
    }

    getPlayerHistories(): PlayerHistory[] {
        return JSON.parse(this.decrypt('playerhistories'));
    }

    getUser() {
        let user: User = null;
        try {
            user = JSON.parse(this.decrypt('user'));
        } catch (error) {
        }

        if (user == null) {
            user = new User();
        }
        return user;
    }

    setUser(user: User) {
        this.encrypt('user', JSON.stringify(user));
    }

    getTeamName(id): string {
        const team = this.getTeams().find(x => x.id === id);
        if (team == null || team == undefined) return "Free Player"
        return team.name;
    }

    getPlayerName(id) {
        const player = this.getPlayers().find(x => x.id == id);
        return player.name;
    }

    linkClick(pageName, id) {
        let user;
        switch (pageName) {
            case 'team':
                user = this.getUser();
                user.selectedTeamId = id;
                this.setUser(user);
                break;
            case 'score':
                user = this.getUser();
                user.selectedMatchId = id;
                this.setUser(user);
                break;
            case 'player':
                user = this.getUser();
                user.selectedPlayerId = id;
                this.setUser(user);
                break;
            case 'playerhistory':
                user = this.getUser();
                user.selectedPlayerId = id;
                this.setUser(user);
                break;
        }
        this.router.navigate(['/' + pageName]);
    }

    getTeamOverall(teamId) {
        let overall = 0;
        let count = 0;
        this.getPlayers().filter(x => x.teamId == teamId && x.retired == false).forEach(x => {
            overall += x.overall;
            count += 1;
        });
        return Math.round(overall / count);
    }

    setTopscorer(topscorer: TopScorer[]) {
        this.encrypt('topscorer', JSON.stringify(topscorer));
    }

    getTopscorer(): TopScorer[] {
        return JSON.parse(this.decrypt('topscorer'));
    }
}