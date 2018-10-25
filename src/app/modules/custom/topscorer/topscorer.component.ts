import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../../core/storage.service';
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
        this.calculateTopScorer();
    }

    calculateTopScorer() {
        const scores = this.storage.getScores();
        for (let i = 0; i < scores.length; i++) {
            const score = scores[i];
            if (this.topScorer.filter(x => x.playerId == score.playerId).length == 0) {
                this.topScorer.push(new TopScorer(score.playerId, 1));
            } else {
                let res = this.topScorer.filter(x => x.playerId == score.playerId)[0];
                res.goal++;
            }
        }
        this.topScorer = this.topScorer.sort((a, b) => b.goal - a.goal);
    }

}
