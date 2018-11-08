import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../../core/services/storage.service';
import { Match } from '../../../shared/model/match';

@Component({
    selector: 'app-fixture',
    templateUrl: './fixture.component.html',
    styleUrls: ['./fixture.component.css']
})
export class FixtureComponent implements OnInit {
    matches: Match[];
    size: number;
    myDiv: number;

    constructor(private storage: StorageService) { }

    ngOnInit() {
        const user = this.storage.getUser();
        const teams = this.storage.getTeams().filter(x => x.id == user.teamId);
        this.myDiv = teams[0].div;
        this.matches = this.storage.getMatches().filter(x => x.div == this.myDiv);
        this.size = user.size;
    }

    counter(n: number): any[] {
        return Array(n);
    }

    getFilteredMatches(id) {
        return this.matches.filter(x => x.week == id);
    }

    divisionChange(value) {
        this.matches = this.storage.getMatches().filter(x => x.div == value);
        console.log(this.matches)
    }

}
