import { Component, OnInit } from '@angular/core';
import * as Addon from '../../../config/localdata';
import { StorageService } from '../../../core/services/storage.service';

@Component({
    selector: 'app-national',
    templateUrl: './national.component.html',
    styleUrls: ['./national.component.css']
})
export class NationalComponent implements OnInit {
    countries = Addon.countries;

    constructor(private storage: StorageService) { }

    ngOnInit() { }

    getPlayerCount(name) {
        return this.storage.getPlayers().filter(x => x.retired == false).filter(x => x.national == name).length;
    }
    
    getOverall(name) {
        const players = this.storage.getPlayers().filter(x => x.retired == false && x.national == name);
        let count = players.length;
        let overall = players.reduce((total, player) => {
            return total + player.overall
        }, 0);
        if (count == 0) return 0;
        return Math.round(overall / count);
    }
}
