import { Component, OnInit } from '@angular/core';
import { Player } from '../../../shared/model/player';
import { StorageService } from '../../../core/services/storage.service';

@Component({
    selector: 'app-players',
    templateUrl: './players.component.html',
    styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
    players: Player[];

    constructor(public storage: StorageService) { }

    ngOnInit() {
        this.players = this.storage.getPlayers();
    }

    filterSelect(value, filter) {
        if (filter == 4) {
            switch (value) {
                case '1': this.players = this.storage.getPlayers();
                    break;
                case '2': this.players = this.storage.getPlayers().filter(x => x.retired == false);
                    break;
                case '3': this.players = this.storage.getPlayers().filter(x => x.retired == true);
                    break;
            }
        } else if (filter == 1) {
            switch (value) {
                case '1': this.players = this.storage.getPlayers().sort((a, b) => {
                        var nameA = a.name.toUpperCase(); // ignore upper and lowercase
                        var nameB = b.name.toUpperCase(); // ignore upper and lowercase
                        if (nameA < nameB) {
                            return -1;
                        }
                        if (nameA > nameB) {
                            return 1;
                        }
                        // names must be equal
                        return 0;
                    });
                    break;
                case '2': this.players = this.storage.getPlayers().sort((a, b) => {
                    var nameA = a.name.toUpperCase(); // ignore upper and lowercase
                    var nameB = b.name.toUpperCase(); // ignore upper and lowercase
                    if (nameA < nameB) {
                        return 1;
                    }
                    if (nameA > nameB) {
                        return -1;
                    }
                    // names must be equal
                    return 0;
                });
                    break;
            }
        } else if (filter == 2) {
            switch (value) {
                case '1': this.players = this.storage.getPlayers().sort((a, b) => a.age - b.age);
                    break;
                case '2': this.players = this.storage.getPlayers().sort((a, b) => b.age - a.age);
                    break;
            }
        } else if (filter == 3) {
            switch (value) {
                case '1': this.players = this.storage.getPlayers().sort((a, b) => a.overall - b.overall);
                    break;
                case '2': this.players = this.storage.getPlayers().sort((a, b) => b.overall - a.overall);
                    break;
            }
        }
    }

}
