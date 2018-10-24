import { Component, OnInit } from '@angular/core';
import { GameService } from '../../../core/game.service';
import { Table } from '../../../shared/model/table';
import { StorageService } from '../../../core/storage.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    table: Table[] = [];

    constructor(private gameService: GameService, private storage: StorageService) { }

    ngOnInit() {
        this.gameService.gameCycle();
        this.table = this.storage.getTable();
    }

    getTeamName(id) {
        const team = this.storage.getTeams().filter(x => x.id === id)[0];
        return team.name;
    }

}
