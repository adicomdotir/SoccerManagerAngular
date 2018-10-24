import { Injectable } from "@angular/core";
import { Player } from "../shared/model/player";
import { Team } from "../shared/model/team";
import { Match } from "../shared/model/match";
import { Table } from "../shared/model/table";
import { Score } from "../shared/model/score";
import { User } from "../shared/model/user";

@Injectable()
export class StorageService {
    setPlayers(players: Player[]) {
        localStorage.setItem('players', JSON.stringify(players));
    }

    getPlayers() {
        return JSON.parse(localStorage.getItem('players'));
    }

    setTeams(teams: Team[]) {
        localStorage.setItem('teams', JSON.stringify(teams));
    }

    getTeams(): Team[] {
        return JSON.parse(localStorage.getItem('teams'));
    }

    setMatches(matches: Match[]) {
        localStorage.setItem('matches', JSON.stringify(matches));
    }

    getMatches(): Match[] {
        return JSON.parse(localStorage.getItem('matches'));
    }

    setTable(table: Table[]) {
        localStorage.setItem('table', JSON.stringify(table));
    }

    getTable(): Table[] {
        return JSON.parse(localStorage.getItem('table'));
    }

    setScores(scores: Score[]) {
        localStorage.setItem('scores', JSON.stringify(scores));
    }

    getScores() {
        return JSON.parse(localStorage.getItem('scores'));
    }

    getUser() {
        let user: User = JSON.parse(localStorage.getItem('user'));
        if (user == null) {
            user = new User();
        }
        return user;
    }

    setUser(user: User) {
        localStorage.setItem('user', JSON.stringify(user));
    }
}