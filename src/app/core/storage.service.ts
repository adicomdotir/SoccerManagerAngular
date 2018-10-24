import { Injectable } from "@angular/core";
import { Player } from "../shared/model/player";
import { Team } from "../shared/model/team";
import { Match } from "../shared/model/match";
import { Table } from "../shared/model/table";
import { Score } from "../shared/model/score";

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

    getTeams() {
        return JSON.parse(localStorage.getItem('teams'));
    }

    setMatches(matches: Match[]) {
        localStorage.setItem('matches', JSON.stringify(matches));
    }

    getMatches() {
        return JSON.parse(localStorage.getItem('matches'));
    }

    setTable(table: Table[]) {
        localStorage.setItem('table', JSON.stringify(table));
    }

    getTable() {
        return JSON.parse(localStorage.getItem('table'));
    }

    setScores(scores: Score[]) {
        localStorage.setItem('scores', JSON.stringify(scores));
    }

    getScores() {
        return JSON.parse(localStorage.getItem('scores'));
    }
}