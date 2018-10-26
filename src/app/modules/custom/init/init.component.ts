import { Component, OnInit } from '@angular/core';
import { teamNames, firstName, lastName, countries } from '../../../config/localdata';
import { Router } from '@angular/router';
import { Team } from '../../../shared/model/team';
import { Player } from '../../../shared/model/player';
import { User } from '../../../shared/model/user';
import { Match } from '../../../shared/model/match';
import { StorageService } from '../../../core/storage.service';
import { Table } from '../../../shared/model/table';

@Component({
    selector: 'app-init',
    templateUrl: './init.component.html',
    styleUrls: ['./init.component.css']
})
export class InitComponent implements OnInit {

    teams = teamNames;
    selectedTeam: number = 1;
    size: number = 2;

    constructor(private router: Router, private storageService: StorageService) { }

    ngOnInit(): void { }

    teamSelect(index) {
        this.selectedTeam = Number.parseInt(index) + 1;
    }

    sizeSelect(index) {
        this.size = Number.parseInt(index);
    }

    onClick() {
        this.generateTeams();
        this.generatePlayers();
        this.generateMatches();
        this.generateTable();

        let user: User = this.storageService.getUser();
        user.teamId = this.selectedTeam;
        user.size = this.size;
        user.status = 'start';
        this.storageService.setUser(user);

        this.router.navigateByUrl('/home');
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

    generateTeams() {
        let gTeams: Team[] = [];
        const myTeam = new Team(gTeams.length + 1, this.teams[this.selectedTeam - 1], 0);
        const teamsId: number[] = [];
        teamsId.push(this.selectedTeam - 1);
        gTeams.push(myTeam);
        while (gTeams.length < this.size) {
            let rnd = Math.floor(Math.random() * this.teams.length);
            if (teamsId.indexOf(rnd) === -1) {
                const temp = new Team(gTeams.length + 1, this.teams[rnd], 0);
                gTeams.push(temp);
                teamsId.push(rnd);
            }
        }
        this.storageService.setTeams(gTeams);
    }

    generatePlayers() {
        const players: Player[] = [];
        for (let i = 1; i <= this.size; i++) {
            for (let j = 0; j < 12; j++) {
                const pl = new Player();
                pl.id = players.length + 1;
                const fn = Math.floor(Math.random() * firstName.length);
                const ln = Math.floor(Math.random() * lastName.length);
                pl.name = firstName[fn] + ' ' + lastName[ln];
                pl.age = Math.floor(Math.random() * 18) + 18;
                pl.attack = Math.floor(Math.random() * 20) + 1;
                pl.defend = Math.floor(Math.random() * 20) + 1;
                pl.goalkeeper = Math.floor(Math.random() * 20) + 1;
                pl.finish = Math.floor(Math.random() * 20) + 1;
                pl.morale = 4;
                pl.overall = pl.attack + pl.defend + pl.goalkeeper + pl.finish;
                pl.teamId = i;
                pl.national = countries[Math.floor(Math.random() * countries.length)];
                pl.number = Math.floor(Math.random() * 99) + 1;
                players.push(pl);
            }
        }
        this.storageService.setPlayers(players);
    }

}
