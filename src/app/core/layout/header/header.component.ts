import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../../core/services/storage.service';
import { Router, Route } from '@angular/router';
import { GameService } from '../../services/game.service';
import { User } from '../../../shared/model/user';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    user: User;
    endSeason = false;

    constructor(private storage: StorageService, private gameService: GameService) {
        gameService.$newSeasonSubject.subscribe(() => {
            this.user = this.storage.getUser();
        });

        gameService.endSeasonSubject.subscribe(() => {
            this.endSeason = true;
        })
    }

    ngOnInit() {
        this.user = this.storage.getUser();
    }

}