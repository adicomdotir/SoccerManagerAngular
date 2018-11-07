import { Component, OnInit } from '@angular/core';
import { Table } from '../../../shared/model/table';
import { StorageService } from '../../../core/services/storage.service';

@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
    table: Table[] = [];
    myDiv: number;
    
    constructor(private storage: StorageService) { }

    ngOnInit() {
        const user = this.storage.getUser();
        const teams = this.storage.getTeams().filter(x => x.id == user.teamId);
        this.myDiv = teams[0].div;
        this.table = this.storage.getTable().filter(x => x.teamDiv == this.myDiv);
    }

    counter(n: number): any[] {
        return Array(n);
    }

    divisionChange(value) {
        this.table = this.storage.getTable().filter(x => x.teamDiv == value);
    }

    getClass(index) {
        if (index == 0) {
            return 'table-success';
        } else if (index == 1) {
            return 'table-second';
        } else if (index == 6) {
            return 'table-warning';
        } else if (index == 7) {
            return 'table-danger';
        }
        return '';
    }
}
