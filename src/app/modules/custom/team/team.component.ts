import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../../core/services/storage.service';
import { Player } from '../../../shared/model/player';
import { User } from '../../../shared/model/user';

@Component({
    selector: 'app-team',
    templateUrl: './team.component.html',
    styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
    players: Player[];
    user: User;
    averageAge: number = 0;
    overall: number = 0;

    constructor(private storage: StorageService) { }

    ngOnInit() {
        this.user = this.storage.getUser();
        this.players = this.storage.getPlayers()
                                    .filter(x => x.teamId == this.user.selectedTeamId)
                                    .filter(x => x.retired == false);
        this.players.forEach(x => {
            this.averageAge += x.age;
            this.overall += x.overall;
        });
        this.averageAge /= this.players.length;
        this.overall /= this.players.length;
        this.overall = Math.round(this.overall);
    }

}
