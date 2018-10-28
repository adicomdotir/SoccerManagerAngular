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

    constructor(private storage: StorageService) { }

    ngOnInit() {
        this.matches = this.storage.getMatches();
        this.size = this.storage.getUser().size;
    }

    counter(n: number): any[] {
        return Array((n - 1) * 2);
    }

    getFilteredMatches(id) {
        return this.matches.filter(x => x.week == id);
    }

}
