import { Component, OnInit } from '@angular/core';
import { teamNames, firstName, lastName, countries } from '../../../config/localdata';
import { Router } from '@angular/router';
import { Team } from '../../../shared/model/team';
import { Player } from '../../../shared/model/player';
import { User } from '../../../shared/model/user';

@Component({
    selector: 'app-init',
    templateUrl: './init.component.html',
    styleUrls: ['./init.component.css']
})
export class InitComponent implements OnInit {
    
    teams = teamNames;
    selectedTeam: number = 1;
    size: number = 2;
    
    constructor(private router: Router) {}
    
    ngOnInit(): void {}

    teamSelect(index) {
        this.selectedTeam = Number.parseInt(index) + 1;
    }

    sizeSelect(index) {
        this.size = index;
    }

    onClick() {
        this.generateTeams();
        this.generatePlayers();
        let user: User = JSON.parse(localStorage.getItem('user'));
        if (user == null) {
            user = new User();
        }
        user.teamId = this.selectedTeam;
        user.size = this.size;
        localStorage.setItem('user', JSON.stringify(user));
        this.router.navigateByUrl('/home');
    }

    generateTeams() {
        let gTeams: Team[] = [];
        const myTeam = new Team(gTeams.length + 1, this.teams[this.selectedTeam], 0);
        const teamsId: number[] = [];
        teamsId.push(this.selectedTeam);
        gTeams.push(myTeam);
        while (gTeams.length < this.size) {
            let rnd = Math.floor(Math.random() * this.teams.length);
            if (teamsId.indexOf(rnd) === -1) {
                const temp = new Team(gTeams.length + 1, this.teams[rnd], 0);
                gTeams.push(temp);
                teamsId.push(rnd);
            }
        }
        localStorage.setItem('teams', JSON.stringify(gTeams));
    }

    generatePlayers() {
        const players: Player[] = [];
        for (let i = 1; i <= this.size; i++) {
            for (let j = 0; j < 16; j++) {         
                const pl = new Player();
                pl.id = players.length + 1;
                const fn = Math.floor(Math.random() * firstName.length);
                const ln = Math.floor(Math.random() * lastName.length);
                pl.name = firstName[fn] + ' ' + lastName[ln];
                pl.age = Math.floor(Math.random() * 18) + 18;
                pl.attack = Math.floor(Math.random() * 20) + 1;
                pl.defend = Math.floor(Math.random() * 20) + 1;
                pl.overall = pl.attack + pl.defend;
                pl.teamId = i;
                pl.national = countries[Math.floor(Math.random() * countries.length)];
                players.push(pl);
            }
        }
        localStorage.setItem('players', JSON.stringify(players))
    }

}
