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

    getColor(index) {
        let R = 256 - index * 32;
        R = R > 255 ? 255 : R;
        let G = index * 32;
        G = G > 255 ? 255 : G;
        let B = 0;
        let RR = ((R.toString(16).length == 1) ? "0" + R.toString(16) : R.toString(16));
        let GG = ((G.toString(16).length == 1) ? "0" + G.toString(16) : G.toString(16));
        let BB = ((B.toString(16).length == 1) ? "0" + B.toString(16) : B.toString(16));
        return '#' + RR + GG + BB;
    }

}
