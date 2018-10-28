import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../../core/services/storage.service';
import { Score } from '../../../shared/model/score';

@Component({
    selector: 'app-score',
    templateUrl: './score.component.html',
    styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {
    scores: Score[];

    constructor(private storage: StorageService) { }

    ngOnInit() {
        const user = this.storage.getUser();
        this.scores = this.storage.getScores().filter(x => x.matchId == user.selectedMatchId);
    }

    getPlayerTeam(id) {
        const player = this.storage.getPlayers().filter(x => x.id == id)[0];
        return this.storage.getTeamName(player.teamId);
    }

}
