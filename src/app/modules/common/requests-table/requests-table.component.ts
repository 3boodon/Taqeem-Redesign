import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component, OnInit, ViewChild, EventEmitter, Output } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort, Sort } from '@angular/material/sort';
import { PeriodicElement, ELEMENT_DATA } from './requests-table.data';

@Component({
    selector: 'app-requests-table',
    templateUrl: './requests-table.component.html',
    styleUrls: ['./requests-table.component.scss'],
})
export class RequestsTableComponent implements OnInit {
    @ViewChild(MatSort, { static: true }) sort: MatSort;

    @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

    @Output() selectRow = new EventEmitter<PeriodicElement>();

    dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

    displayedColumns: string[] = [
        'id',
        'maker',
        'model',
        'year',
        'color',
        'serial',
        'status',
        'plateNumber',
        'plateType',
        'omr',
        'price',
        'createdAt',
    ];

    constructor(private _liveAnnouncer: LiveAnnouncer) {}

    ngOnInit(): void {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }

    /** Announce the change in sort state for assistive technology. */
    announceSortChange(sortState: Sort): void {
        // This example uses English messages. If your application supports
        // multiple language, you would internationalize these strings.
        // Furthermore, you can customize the message to add additional
        // details about the values being sorted.
        if (sortState.direction) {
            this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
        } else {
            this._liveAnnouncer.announce('Sorting cleared');
        }
    }

    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    clickedRow = () => this.selectRow.emit({
      id: 23423,
      maker: 'Mercedes',
      model: 'Civik',
      year: 1999,
      color: 'Lime',
      serialNumber: 37649208,
      status: 'active',
      plateNumber: 'BH 788',
      plateType: 'Private',
      omr: 5564887,
      price: 12300,
      createdAt: { time: '06:30am', date: '13 Aug' },
  });
}
