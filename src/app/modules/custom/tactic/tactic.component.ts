import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../../core/services/storage.service';
import { Player } from '../../../shared/model/player';

@Component({
    selector: 'app-tactic',
    templateUrl: './tactic.component.html',
    styleUrls: ['./tactic.component.css']
})
export class TacticComponent implements OnInit {
    players: Player[];
    
    constructor(private storage: StorageService) { }

    ngOnInit() {
        const user = this.storage.getUser();
        this.players = this.storage.getPlayers().filter(x => x.teamId == user.teamId);
    }

}
