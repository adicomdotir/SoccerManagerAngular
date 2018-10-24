import { Component, OnInit } from '@angular/core';
import { GameService } from '../../../core/game.service';
import { Table } from '../../../shared/model/table';
import { StorageService } from '../../../core/storage.service';
import { User } from '../../../shared/model/user';
import { Match } from '../../../shared/model/match';
import { Score } from '../../../shared/model/score';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    table: Table[] = [];
    user: User;
    matches: Match[];
    topScorer: TopScorer[] = [];

    constructor(private gameService: GameService, private storage: StorageService) { }

    ngOnInit() {
        this.gameService.gameCycle();
        this.table = this.storage.getTable();
        this.user = this.storage.getUser();
        this.matches = this.storage.getMatches().filter(x => x.week === 1);
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
        this.topScorer = this.topScorer.sort((a, b) => b.goal - a.goal).slice(0, 5);
    }

    getPlayerName(id) {
        const player = this.storage.getPlayers().filter(x => x.id == id)[0];
        return player.name;
    }

    counter(n: number): any[] {
        return Array((n - 1) * 2);
    }

    fixtureChange(index) {
        this.matches = this.storage.getMatches().filter(x => x.week == index);
    }

}

class TopScorer {
    playerId: number;
    goal: number;

    constructor(playerId, goal) {
        this.playerId = playerId;
        this.goal = goal;
    }
}