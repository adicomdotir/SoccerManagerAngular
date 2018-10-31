import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../../core/services/storage.service';
import { PlayerHistory } from '../../../shared/model/playerHistory';

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

    constructor(private storage: StorageService) { }

    ngOnInit() {
        const user = this.storage.getUser();
        this.playerhistory = this.storage.getPlayerHistories().filter(x => x.playerId == user.selectedPlayerId);
        for (let index = 0; index < this.playerhistory.length; index++) {
            const element = this.playerhistory[index];
            this.allPlayedPlayer += element.playedPlayer;
            this.allPlayedGK += element.playedGK;
            this.allScored += element.scored;
            this.allConceded += element.conceded;
        }
    }

}
