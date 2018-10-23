import { Component, OnInit } from '@angular/core';
import { teamNames } from '../../../config/localdata';
import { Router } from '@angular/router';

@Component({
    selector: 'app-init',
    templateUrl: './init.component.html',
    styleUrls: ['./init.component.css']
})
export class InitComponent implements OnInit {
    
    teams = teamNames;
    selectedTeam = 0;
    size: number = 2;
    
    constructor(private router: Router) {
        
    }
    
    ngOnInit(): void {}

    teamSelect(index) {
        this.selectedTeam = index;
    }

    sizeSelect(index) {
        this.size = index;
    }

    onClick() {
        this.generateTeams();
        this.generatePlayers();
        let user: Object = localStorage.getItem('user');
        if (user == null) {
            user = {};
        }
        user['teamId'] = this.selectedTeam;
        user['size'] = this.size;
        localStorage.setItem('user', JSON.stringify(user));
        this.router.navigateByUrl('/home');
    }

    generateTeams() {
        let teams: Object;
    }

    generatePlayers() {

    }

}
