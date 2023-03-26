import {
    Component,
    ViewEncapsulation,
    OnInit,
} from '@angular/core';
import { FuseMediaWatcherService } from '@fuse/services/media-watcher';
import { Subject, takeUntil } from 'rxjs';
import { PeriodicElement } from '../../../common/requests-table/requests-table.data';

@Component({
    selector: 'requests',
    templateUrl: './previous-requests.component.html',
    styleUrls: ['./previous-requests.scss'],
    encapsulation: ViewEncapsulation.None,
})
/* eslint-disable @typescript-eslint/explicit-function-return-type */
export class PreviousRequestsComponent implements OnInit {
    reportMode: boolean = false;
    isScreenSmall: boolean;
    vehicleReport: PeriodicElement;
    private _unsubscribeAll: Subject<any> = new Subject<any>();

    /**
     * Constructor
     */
    constructor(
        private _fuseMediaWatcherService: FuseMediaWatcherService,
    ) {}

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit() {
        // Subscribe to media changes
        this._fuseMediaWatcherService.onMediaChange$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(({ matchingAliases }) => {
                // Check if the breakpoint is 'md' and up
                this.isScreenSmall = matchingAliases.includes('md');
            });
    }

    /**
     * On backdrop clicked
     */
    onBackdropClicked(): void {
        this.reportMode = false;
    }

    public getDataFromSelectedRow($event) {
        this.reportMode = true;
        this.vehicleReport = $event;
    }

    public closeSidebar($event) {
        this.reportMode = $event;
        console.log($event);
    }
}
