import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../../core/services/storage.service';
import { TopScorer } from '../../../shared/model/topscorer';

@Component({
    selector: 'app-topscorer',
    templateUrl: './topscorer.component.html',
    styleUrls: ['./topscorer.component.css']
})
export class TopscorerComponent implements OnInit {

    topScorer: TopScorer[] = [];

    constructor(private storage: StorageService) { }

    ngOnInit() {
        const user = this.storage.getUser();
        const teams = this.storage.getTeams().filter(x => x.id == user.teamId);
        let userDiv = teams[0].div;

        this.topScorer = this.storage.getTopscorer();
        if (this.topScorer == null) {
            this.topScorer = [];
        } else {
            this.topScorer = this.topScorer.filter(x => x.div == userDiv).sort((a,b) => b.goal - a.goal);
        }
    }

    getPlayerTeam(id) {
        const player = this.storage.getPlayers().filter(x => x.id == id)[0];
        return this.storage.getTeamName(player.teamId);
    }

}
