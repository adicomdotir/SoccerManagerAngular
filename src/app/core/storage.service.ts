import { Injectable } from "@angular/core";
import { Player } from "../shared/model/player";
import { Team } from "../shared/model/team";
import { Match } from "../shared/model/match";
import { Table } from "../shared/model/table";
import { Score } from "../shared/model/score";
import { User } from "../shared/model/user";
import { Router } from "@angular/router";
import * as crypto from "crypto-js";

@Injectable()
export class StorageService {
    private secret = '123456789';
    constructor(private router: Router) { }

    encrypt(route, objectString) {
        const hash = crypto.AES.encrypt(objectString, this.secret);
        localStorage.setItem(route, hash.toString());
    }

    decrypt(route) {
        const hash = localStorage.getItem(route);
        const objectString = crypto.AES.decrypt(hash, this.secret);
        return objectString.toString(crypto.enc.Utf8);
    }

    setPlayers(players: Player[]) {
        this.encrypt('players', JSON.stringify(players));
    }

    getPlayers(): Player[] {
        return JSON.parse(this.decrypt('players'));
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
        const team = this.getTeams().filter(x => x.id === id)[0];
        return team.name;
    }

    getPlayerName(id) {
        const player = this.getPlayers().filter(x => x.id == id)[0];
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
        }
        this.router.navigate(['/' + pageName]);
    }

    getTeamOverall(teamId) {
        let overall = 0;
        let count = 0;
        this.getPlayers().filter(x => x.teamId == teamId).forEach(x => {
            overall += x.overall;
            count += 1;
        });
        return Math.round(overall / count);
    }
}