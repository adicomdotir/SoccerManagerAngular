import { Component, OnInit } from '@angular/core';
import { Table } from '../../../shared/model/table';
import { StorageService } from '../../../core/storage.service';

@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
    table: Table[] = [];
    
    constructor(private storage: StorageService) { }

    ngOnInit() {
        this.table = this.storage.getTable();
    }
}
