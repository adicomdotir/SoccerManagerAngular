import { Component, OnInit } from '@angular/core';
import { GameService } from '../../../core/game.service';
import { Table } from '../../../shared/model/table';
import { StorageService } from '../../../core/storage.service';
import { User } from '../../../shared/model/user';
import { Match } from '../../../shared/model/match';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    table: Table[] = [];
    user: User;
    matches: Match[];

    constructor(private gameService: GameService, private storage: StorageService) { }

    ngOnInit() {
        this.gameService.gameCycle();
        this.table = this.storage.getTable();
        this.user = this.storage.getUser();
        this.matches = this.storage.getMatches().filter(x => x.week === 1);
    }

    getTeamName(id) {
        const team = this.storage.getTeams().filter(x => x.id === id)[0];
        return team.name;
    }

    counter(n: number): any[] {
        return Array((n - 1) * 2);
    }

    fixtureChange(index) {
        this.matches = this.storage.getMatches().filter(x => x.week == index);
    }

}
