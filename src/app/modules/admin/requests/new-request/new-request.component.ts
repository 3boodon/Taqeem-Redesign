import { MatDrawer } from '@angular/material/sidenav';
import { Subject, takeUntil } from 'rxjs';
import { FuseMediaWatcherService } from '@fuse/services/media-watcher';
import {
    ChangeDetectionStrategy,
    Component,
    ViewEncapsulation,
    OnInit,
    ViewChild,
} from '@angular/core';

@Component({
    selector: 'new-request',
    templateUrl: './new-request.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewRequestComponent implements OnInit {
    @ViewChild(MatDrawer, { static: true }) drawer: MatDrawer;

    opened: boolean = false;
    isScreenSmall: boolean;
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
       this.drawer.close();
    }

    public showInquiryDetails(event): void {
        this.drawer.open();
    }
}
