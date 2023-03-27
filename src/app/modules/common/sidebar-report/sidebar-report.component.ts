import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-sidebar-report',
    templateUrl: './sidebar-report.component.html',
    styleUrls: ['./sidebar-report.component.scss'],
})
export class SidebarReportComponent implements OnInit {
    @Output() sidebarClose = new EventEmitter<boolean>();

    /**
     * Constructor
     */
    constructor() {}

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------
    ngOnInit(): void {}

    public close(): void {
        this.sidebarClose.emit(false);
    }
}
