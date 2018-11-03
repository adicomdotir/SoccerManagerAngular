import { Component, OnInit } from '@angular/core';
import { teamNames, firstName, lastName, countries } from '../../../config/localdata';
import { Router } from '@angular/router';
import { Team } from '../../../shared/model/team';
import { Player } from '../../../shared/model/player';
import { User } from '../../../shared/model/user';
import { Match } from '../../../shared/model/match';
import { StorageService } from '../../../core/services/storage.service';
import { Table } from '../../../shared/model/table';
import { GeneratorService } from '../../../core/services/generator.service';

@Component({
    selector: 'app-init',
    templateUrl: './init.component.html',
    styleUrls: ['./init.component.css']
})
export class InitComponent implements OnInit {

    teams = teamNames;
    selectedTeam: number = 1;
    size: number = 8;
    divSize: number = 5;

    constructor(private router: Router, private storageService: StorageService, private generator: GeneratorService) { }

    ngOnInit(): void { }

    teamSelect(index) {
        this.selectedTeam = Number.parseInt(index) + 1;
    }

    onClick() {
        this.generateTeams();
        this.generatePlayers();
        this.generateMatches();
        this.generateTable();
        this.storageService.setPlayerHistories([]);

        let user: User = this.storageService.getUser();
        user.teamId = 1;
        user.size = this.size;
        user.status = 'start';
        user.season = 1;
        this.storageService.setUser(user);

        this.router.navigateByUrl('/home');
    }

    generateTable() {
        const table: Table[] = [];
        const teams = this.storageService.getTeams();
        for (let i = 0; i < teams.length; i++) {
            const temp = new Table();
            temp.id = table.length + 1;
            temp.teamId = teams[i].id;
            temp.teamDiv = teams[i].div;
            table.push(temp);
        }
        this.storageService.setTable(table);
    }

    generateMatches() {
        const matches: Match[] = [];
        for (let k = 1; k <= this.divSize; k++) {
            const temp: number[] = [];
            const teams = this.storageService.getTeams().filter(x => x.div == k);
            for (let i = 0; i < teams.length; i++) {
                temp.push(teams[i].id);
            }
            // Week 
            for (let i = 1; i <= (this.size - 1) * 2; i++) {
                // Match
                for (let j = 0; j < this.size / 2; j++) {
                    const matchTemp = new Match(matches.length + 1, i, temp[j], temp[this.size - 1 - j]);
                    matchTemp.div = k;
                    matches.push(matchTemp);
                }
                this.swapWeek(temp);
            }
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

    generateTeams() {
        let gTeams: Team[] = [];
        const myTeam = new Team(gTeams.length + 1, this.teams[this.selectedTeam - 1], 0);
        myTeam.div = 5;
        const teamsId: number[] = [];
        teamsId.push(this.selectedTeam - 1);
        gTeams.push(myTeam);
        let index = 1;
        let div = 1;
        while (gTeams.length < this.size * this.divSize) {
            let rnd = Math.floor(Math.random() * this.teams.length);
            if (teamsId.indexOf(rnd) === -1) {
                const temp = new Team(gTeams.length + 1, this.teams[rnd], 0);
                temp.div = div;
                index++;
                if (index > 8) {
                    index = 1;
                    div++;
                }
                gTeams.push(temp);
                teamsId.push(rnd);
            }
        }
        this.storageService.setTeams(gTeams);
    }

    generatePlayers() {
        const players: Player[] = [];
        for (let i = 1; i <= this.size * this.divSize; i++) {
            for (let j = 0; j < 12; j++) {
                players.push(this.generator.createPlayer(players.length + 1, i));
            }
        }
        this.storageService.setPlayers(players);
    }

}
