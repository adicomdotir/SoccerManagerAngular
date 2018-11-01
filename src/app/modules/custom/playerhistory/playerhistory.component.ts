import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../../core/services/storage.service';
import { PlayerHistory } from '../../../shared/model/playerHistory';
import { Player } from '../../../shared/model/player';
import { User } from '../../../shared/model/user';

@Component({
    selector: 'app-playerhistory',
    templateUrl: './playerhistory.component.html',
    styleUrls: ['./playerhistory.component.css']
})
export class PlayerHistoryComponent implements OnInit {
    playerhistory: PlayerHistory[] = [];
    allPlayedPlayer: number = 0;
    allPlayedGK: number = 0;
    allScored: number = 0;
    allConceded: number = 0;
    player: Player;
    user: User;

    constructor(private storage: StorageService) { }

    ngOnInit() {
        this.user = this.storage.getUser();
        this.player = this.storage.getPlayers().filter(x => x.id == this.user.selectedPlayerId)[0];
        this.playerhistory = this.storage.getPlayerHistories().filter(x => x.playerId == this.user.selectedPlayerId);
        for (let index = 0; index < this.playerhistory.length; index++) {
            const element = this.playerhistory[index];
            this.allPlayedPlayer += element.playedPlayer;
            this.allPlayedGK += element.playedGK;
            this.allScored += element.scored;
            this.allConceded += element.conceded;
        }
        this.allPlayedPlayer += this.player.playedPlayer;
        this.allPlayedGK += this.player.playedGK;
        this.allScored += this.player.scored;
        this.allConceded += this.player.conceded;
    }

}
