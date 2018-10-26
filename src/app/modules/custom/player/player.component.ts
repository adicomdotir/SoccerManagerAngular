import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../../core/storage.service';
import { Player } from '../../../shared/model/player';
import { MORALES } from '../../../config/localdata';

@Component({
    selector: 'app-player',
    templateUrl: './player.component.html',
    styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
    player: Player;

    constructor(private storage: StorageService) { }

    ngOnInit() {
        const user = this.storage.getUser();
        this.player = this.storage.getPlayers().filter(x => x.id == user.selectedPlayerId)[0];
    }

    getMorale(id) {
        return MORALES[id];
    }

}
