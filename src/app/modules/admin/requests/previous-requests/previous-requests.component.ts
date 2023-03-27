import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { FuseMediaWatcherService } from '@fuse/services/media-watcher';
import { Subject, takeUntil } from 'rxjs';
import { VehicleReport } from '../../../common/requests-table/requests-table.data';

@Component({
    selector: 'requests',
    templateUrl: './previous-requests.component.html',
    styleUrls: ['./previous-requests.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class PreviousRequestsComponent implements OnInit {
    opened: boolean = false;
    isScreenSmall: boolean;
    vehicleReport: VehicleReport;
    private _unsubscribeAll: Subject<any> = new Subject<any>();

    /**
     * Constructor
     */
    constructor(private _fuseMediaWatcherService: FuseMediaWatcherService) {}

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void {
        // Subscribe to media changes
        this._fuseMediaWatcherService.onMediaChange$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(({ matchingAliases }) => {
                // Check if the breakpoint is 'md' and up
                this.isScreenSmall = matchingAliases.includes('md');
            });
    }

    /**
     * On Drawer Backdrop Click
     */
    onBackdropClicked(): void {
        this.opened = false;
    }

    /**
     * Store Selected Request Data & Open Report Drawer
     */
    public getDataFromSelectedRow($event): void {
        this.opened = true;
        this.vehicleReport = $event;
    }

    /**
     * Close Report Drawer when [ X icon ] is clicked
     */
    public closeSidebar($event): void {
        this.opened = $event;
    }
}
