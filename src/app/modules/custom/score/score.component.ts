import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../../core/services/storage.service';
import { Score } from '../../../shared/model/score';
import { Match } from '../../../shared/model/match';

@Component({
    selector: 'app-score',
    templateUrl: './score.component.html',
    styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {
    scores: Score[];
    match: Match;

    constructor(private storage: StorageService) { }

    ngOnInit() {
        const user = this.storage.getUser();
        console.log(user);
        this.scores = this.storage.getScores().filter(x => x.matchId == user.selectedMatchId);
        this.match = this.storage.getMatches().filter(x => x.id == user.selectedMatchId)[0];
    }

    getPlayerTeam(id) {
        const player = this.storage.getPlayers().filter(x => x.id == id)[0];
        return this.storage.getTeamName(player.teamId);
    }

    getIcon(score) {
        if (score == true)
            return 'assets/images/scored.png';
        else
            return 'assets/images/missed.png';
    }

}
