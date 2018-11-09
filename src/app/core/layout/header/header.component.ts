import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../../core/services/storage.service';
import { GameService } from '../../services/game.service';
import { User } from '../../../shared/model/user';
import { Team } from '../../../shared/model/team';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    user: User;
    endSeason = false;
    myTeam: Team;

    constructor(private storage: StorageService, private gameService: GameService) {
        gameService.$newSeasonSubject.subscribe(() => {
            this.init();
        });

        gameService.$endSeasonSubject.subscribe(() => {
            this.endSeason = !this.endSeason;
        })
    }

    ngOnInit() {}

    init() {
        this.user = this.storage.getUser();
        this.myTeam = this.storage.getTeams().filter(x => x.id == this.user.teamId)[0];
    }

}