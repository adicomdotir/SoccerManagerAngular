import { Component, OnInit } from '@angular/core';
import {Match, Player, Report, Team, Tournament} from '../../models/models';
import {convertNumberToRomanNumerals} from '../../helpers';

@Component({
  selector: 'app-old',
  templateUrl: './old.component.html',
  styleUrls: ['./old.component.css']
})
export class OldComponent implements OnInit {
    gameEngine = new GameEngine();
    localRanking = RANKING;
    buttonMessage: string;
    matches: Match[][] = [];

    ngOnInit() {
        this.buttonMessage = 'World Cup ' + convertNumberToRomanNumerals(this.gameEngine.tournaments.length + 1);
    }

    start() {
        this.gameEngine.preStart();
        this.gameEngine.gameProcess();
        this.createTournament();
        this.buttonMessage = 'World Cup ' + convertNumberToRomanNumerals(this.gameEngine.tournaments.length + 1);
        this.localRanking = [];
        for (let i = 0; i < this.gameEngine.teams.length; i++) {
            this.localRanking.push(this.gameEngine.teams[i].name);
        }
    }

    createTournament() {
        this.matches = [];
        const tmp = this.gameEngine.matches.map(x => x.level);
        const matchOfLevel = new Set(tmp);
        for (const mol of matchOfLevel) {
            const matchesByLevel = this.gameEngine.matches
                .filter(x => x.tournamentId === this.gameEngine.getLastTournamentId() && x.level === mol);
            this.matches.push(matchesByLevel);
        }
    }
}

class GameEngine {
    teams: Team[] = [];
    players: Player[] = [];
    tournaments: Tournament[] = [];
    matches: Match[] = [];
    reports: Report[] = [];
    schedule = [];
    hallOfFames: HallOfFame[] = [];

    constructor() {
        this.generateTeams();
    }

    preStart() {
        const tournament = new Tournament(this.tournaments.length + 1);
        this.tournaments.push(tournament);

        this.schedule = [];
        this.teams.sort((a, b) => b.rankingPower - a.rankingPower);
        for (let i = 0; i < this.teams.length; i++) {
            this.schedule.push(this.teams[i].id);
        }
    }

    generateTeams() {
        for (let i = 0; i < RANKING.length; i++) {
            const team = new Team(RANKING[i]);
            team.setRankingPower(100 - i);
            team.gkPower = 0;
            for (let j = 0; j < 10; j++) {
                const player = new Player(team.id);
                this.players.push(player);
                team.gkPower += player.overall;
            }
            team.gkPower = Math.floor(team.gkPower / 10);
            this.teams.push(team);
            this.schedule.push(team.id);
        }
        console.log(this.teams);
    }

    gameProcess() {
        let indexRanking = 63;
        const tournamentId = this.getLastTournamentId();
        let matchLevel = 0;
        while (this.schedule.length > 1) {
            matchLevel = this.schedule.length / 2;
            const localSchedule: string[] = [];
            for (let i = 0; i < this.schedule.length / 2; i++) {
                const teamHome: Team = this.teams.find(x => x.id === this.schedule[i]);
                const teamAway: Team = this.teams.find(x => x.id === this.schedule[this.schedule.length - i - 1]);
                const chanceHome = Math.floor(Math.random() * (teamHome.rankingPower / 10)) + 1;
                const chanceAway = Math.floor(Math.random() * (teamAway.rankingPower / 10)) + 1;

                let rndHome = 0;
                let rndAway = 0;
                for (let j = 0; j < chanceHome; j++) {
                    const homePlayers = this.players.filter(x => x.teamId === teamHome.id);
                    const playerSelect = Math.floor(Math.random() * homePlayers.length);
                    if (homePlayers[playerSelect].overall > teamAway.gkPower) {
                        rndHome += 1;
                    }
                }
                for (let j = 0; j < chanceAway; j++) {
                    const awayPlayers = this.players.filter(x => x.teamId === teamAway.id);
                    const playerSelect = Math.floor(Math.random() * awayPlayers.length);
                    if (awayPlayers[playerSelect].overall > teamAway.gkPower) {
                        rndAway += 1;
                    }
                }

                if (rndHome > rndAway) {
                    localSchedule.push(teamHome.id);
                    teamAway.rankingPower = 100 - indexRanking;
                    indexRanking -= 1;
                } else if (rndAway > rndHome) {
                    localSchedule.push(teamAway.id);
                    teamHome.rankingPower = 100 - indexRanking;
                    indexRanking -= 1;
                } else if (rndHome === rndAway) {
                    if (teamHome.rankingPower > teamAway.rankingPower) {
                        rndAway += 1;
                        localSchedule.push(teamAway.id);
                        teamHome.rankingPower = 100 - indexRanking;
                        indexRanking -= 1;
                    } else {
                        rndHome += 1;
                        localSchedule.push(teamAway.id);
                        teamHome.rankingPower = 100 - indexRanking;
                        indexRanking -= 1;
                    }
                }

                const match = new Match(tournamentId);
                match.homeTeamId = teamHome.id;
                match.awayTeamId = teamAway.id;
                match.homeTeamGoal = rndHome;
                match.awayTeamGoal = rndAway;
                match.level = matchLevel;
                this.matches.push(match);
            }
            this.schedule = localSchedule;
            this.teams.find(x => x.id === this.schedule[0]).rankingPower = 100;
        }
        this.hallOfFames.push(new HallOfFame(this.schedule[0], tournamentId));
    }

    getTeamName(teamId) {
        return this.teams.find(x => x.id === teamId).name;
    }

    getTournamentId(tourId) {
        return this.tournaments.find(x => x.id === tourId).name;
    }

    getLastTournamentId() {
        return this.tournaments[this.tournaments.length - 1].id;
    }
}

class HallOfFame {
    champion: string;
    runner: string;
    tournamentName: string;


    constructor(champion: string, tournamentName: string) {
        this.champion = champion;
        this.tournamentName = tournamentName;
    }
}

let RANKING = [
    'Belgium',
    'France',
    'Brazil',
    'England',
    'Portugal',
    'Spain',
    'Uruguay',
    'Argentina',
    'Croatia',
    'Colombia',
    'Mexico',
    'Italy',
    'Denmark',
    'Germany',
    'Netherlands',
    'Switzerland',
    'Chile',
    'Poland',
    'Sweden',
    'Wales',
    'Senegal',
    'USA',
    'Ukraine',
    'Peru',
    'Austria',
    'Tunisia',
    'Japan',
    'Venezuela',
    'Iran',
    'Serbia',
    'Algeria',
    'Nigeria',
    'Turkey',
    'Russia',
    'Paraguay',
    'Republic of Ireland',
    'Slovakia',
    'Korea Republic',
    'Morocco',
    'Iceland',
    'Northern Ireland',
    'Australia',
    'Norway',
    'Romania',
    'Scotland',
    'Czech Republic',
    'Hungary',
    'Ghana',
    'Jamaica',
    'Costa Rica',
    'Bosnia',
    'Egypt',
    'Cameroon',
    'Greece',
    'Finland',
    'Mali',
    'Qatar',
    'Burkina Faso',
    'Congo DR',
    'Ecuador',
    'Côte Ivoire',
    'Slovenia',
    'Honduras',
    'Montenegro'
];
