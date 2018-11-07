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
    userDiv: number;

    constructor(private gameService: GameService, private storage: StorageService, private router: Router) { }

    ngOnInit() {
        this.user = this.storage.getUser();
        if (this.user.status === 'start') {
            this.user.status = 'end';
            this.storage.setUser(this.user);
            // this.gameService.gameCycle();
        }

        const teams = this.storage.getTeams().filter(x => x.id == this.user.teamId);
        this.userDiv = teams[0].div;
        this.table = this.storage.getTable().filter(x => x.teamDiv == this.userDiv);
        this.matches = this.storage.getMatches().filter(x => x.div == this.userDiv).filter(x => x.week === 1);
        this.players = this.storage.getPlayers().filter(x => x.retired == false && x.teamId == this.user.teamId)
            .sort((a, b) => b.overall - a.overall).slice(0, 5);
        this.topScorer = this.storage.getTopscorer();
        if (this.topScorer == null) {
            this.topScorer = [];
        } else {
            this.topScorer = this.topScorer.filter(x => x.div == this.userDiv).sort((a,b) => b.goal - a.goal).slice(0, 5);
        }

        this.gameService.$newSeasonSubject.subscribe(() => {
            this.table = this.storage.getTable();
            this.matches = this.storage.getMatches().filter(x => x.week === 1);
            this.players = this.storage.getPlayers().sort((a, b) => b.overall - a.overall)
                .filter(x => x.retired == false).slice(0, 5);
            this.topScorer = this.storage.getTopscorer().filter(x => x.div == this.userDiv);
        });
    }

    // calculateTopScorer() {
    //     this.topScorer = [];
    //     let scores = this.storage.getScores();
    //     if (scores != null) {
    //         scores = scores.filter(x => x.score == true);
    //         for (let i = 0; i < scores.length; i++) {
    //             const score = scores[i];
    //             if (this.topScorer.filter(x => x.playerId == score.playerId).length == 0) {
    //                 this.topScorer.push(new TopScorer(score.playerId, 1));
    //             } else {
    //                 let res = this.topScorer.filter(x => x.playerId == score.playerId)[0];
    //                 res.goal++;
    //             }
    //         }
    //         this.topScorer = this.topScorer.sort((a, b) => b.goal - a.goal).slice(0, 5);
    //     }
    // }

    counter(n: number): any[] {
        return Array((n - 1) * 2);
    }

    fixtureChange(index) {
        this.matches = this.storage.getMatches().filter(x => x.div == this.userDiv).filter(x => x.week == index);
    }
}