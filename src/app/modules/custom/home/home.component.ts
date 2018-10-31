import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GameService } from '../../../core/services/game.service';
import { Table } from '../../../shared/model/table';
import { StorageService } from '../../../core/services/storage.service';
import { User } from '../../../shared/model/user';
import { Match } from '../../../shared/model/match';
import { TopScorer } from '../../../shared/model/topscorer';
import { Player } from '../../../shared/model/player';

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
    players: Player[] = [];

    constructor(private gameService: GameService, private storage: StorageService, private router: Router) { }

    ngOnInit() {
        this.user = this.storage.getUser();
        if (this.user.status === 'start') {
            this.user.status = 'end';
            this.storage.setUser(this.user);
            this.gameService.gameCycle();
        }
        this.table = this.storage.getTable();
        this.matches = this.storage.getMatches().filter(x => x.week === 1);
        this.players = this.storage.getPlayers().sort((a, b) => b.overall - a.overall)
                                    .filter(x => x.retired == false).slice(0, 5);     
        this.calculateTopScorer();
        
        this.gameService.$newSeasonSubject.subscribe(() => {
            this.table = this.storage.getTable();
            this.matches = this.storage.getMatches().filter(x => x.week === 1);
            this.players = this.storage.getPlayers().sort((a, b) => b.overall - a.overall)
                                        .filter(x => x.retired == false).slice(0, 5);     
            this.calculateTopScorer();
        });
    }

    calculateTopScorer() {
        this.topScorer = [];
        const scores = this.storage.getScores().filter(x => x.score == true);
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

    counter(n: number): any[] {
        return Array((n - 1) * 2);
    }

    fixtureChange(index) {
        this.matches = this.storage.getMatches().filter(x => x.week == index);
    }
}