import {convertNumberToRomanNumerals, generateId, random} from '../helpers';
import {Names} from '../data/names';

export class Models {

}

export class Team {
    id: string;
    name: string;
    rankingPower: number;
    gkPower: number;

    constructor(name: string) {
        this.id = generateId();
        this.name = name;
    }

    setRankingPower(rankingPower) {
        this.rankingPower = rankingPower;
    }

    setGkPower(gkPower) {
        this.gkPower = gkPower;
    }
}

export class Player {
    id: string;
    name: string;
    age: number;
    overall: number;
    teamId: string;

    constructor(teamId) {
        this.age = random(20) + 18;
        this.id = generateId();
        this.name = Names.getRandomName();
        this.overall = random(50);
        this.teamId = teamId;
    }
}

export class Tournament {
    id: string;
    name: string;

    constructor(counter: number) {
        this.id = generateId();
        this.name = 'World Cup ' + convertNumberToRomanNumerals(counter);
    }
}

export class Match {
    tournamentId: string;
    id: string;
    level: number;
    homeTeamId: string;
    awayTeamId: string;
    homeTeamGoal: number;
    awayTeamGoal: number;

    constructor(tourId) {
        this.tournamentId = tourId;
        this.id = generateId();
    }

}

export class Report {
    id: string;
    matchId: string;
}
