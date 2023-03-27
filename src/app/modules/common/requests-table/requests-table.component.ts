import {
    Component,
    OnInit,
    ViewChild,
    EventEmitter,
    Output,
    Input,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { VehicleReport, ELEMENT_DATA } from './requests-table.data';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
    selector: 'app-requests-table',
    templateUrl: './requests-table.component.html',
    styleUrls: ['./requests-table.component.scss'],
})
export class RequestsTableComponent implements OnInit {
    @ViewChild(MatSort, { static: true }) sort: MatSort;
    @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
    @Input() reportSideBarState: boolean;
    @Output() selectRow = new EventEmitter<VehicleReport>();
    dataSource = new MatTableDataSource<VehicleReport>(ELEMENT_DATA);
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
    selection = new SelectionModel<VehicleReport>(false, []);

    /**
     * Constructor
     */
    constructor() {}

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------
    ngOnInit(): void {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }


    public clickedRow(row): void {
        if (!this.selection.isSelected(row)) {
            if (this.reportSideBarState) {
                return;
            }
            this.selection.select(row);
        } else {
            if (!this.reportSideBarState) {
                return;
            }
            this.selection.deselect(row);
        }
        // Emit request data
        this.selectRow.emit(row);
    };
}
