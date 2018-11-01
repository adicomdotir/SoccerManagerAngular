import { Component, OnInit } from '@angular/core';
import { Player } from '../../../shared/model/player';
import { StorageService } from '../../../core/services/storage.service';

@Component({
    selector: 'app-players',
    templateUrl: './players.component.html',
    styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
    players: Player[];

    constructor(private storage: StorageService) { }

    ngOnInit() {
        this.players = this.storage.getPlayers();
    }

}
