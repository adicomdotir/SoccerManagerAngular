import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../../core/services/storage.service';
import { Player } from '../../../shared/model/player';
import { User } from '../../../shared/model/user';
import { GameService } from '../../../core/services/game.service';

declare var $: any;

@Component({
    selector: 'app-tactic',
    templateUrl: './tactic.component.html',
    styleUrls: ['./tactic.component.css']
})
export class TacticComponent implements OnInit {
    players: Player[];
    selectedPlayers: number[] = [-1, -1, -1, -1, -1, -1];
    user: User;
    id: number;

    constructor(public storage: StorageService, private gameService: GameService) { }

    ngOnInit() {
        this.user = this.storage.getUser();
        this.players = this.storage.getPlayers().filter(x => x.teamId == this.user.teamId);
    }

    playerSelect(value) {
        this.selectedPlayers[this.id] = Number.parseInt(value);
        this.players = this.storage.getPlayers().filter(x => x.teamId == this.user.teamId && this.selectedPlayers.indexOf(x.id) < 0);
        $('#exampleModal').modal('hide');
    }

    playSubmit() {
        // if (this.selectedPlayers.indexOf(-1) != -1) {
        //     alert('Please Select all position, without repeat');
        // } else {
        //     this.gameService.gameCycle();
        // }
        this.gameService.gameCycle();
    }

    preModal(id) {
        this.id = id;
    }
}
