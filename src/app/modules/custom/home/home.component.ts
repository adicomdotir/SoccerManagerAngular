import { Component, OnInit } from '@angular/core';
import { GameService } from '../../../core/game.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    constructor(private gameService: GameService) { }

    ngOnInit() {
        this.gameService.gameCycle();
    }

}
