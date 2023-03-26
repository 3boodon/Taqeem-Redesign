import { Subject, takeUntil } from 'rxjs';
import { FuseMediaWatcherService } from './../../../../../@fuse/services/media-watcher/media-watcher.service';
import {
    ChangeDetectionStrategy,
    Component,
    ViewEncapsulation,
    OnInit,
} from '@angular/core';

@Component({
    selector: 'new-request',
    templateUrl: './new-request.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewRequestComponent implements OnInit {
    opened: boolean = false;
    isScreenSmall: boolean;
    private _unsubscribeAll: Subject<any> = new Subject<any>();

    /**
     * Constructor
     */
    constructor(private _fuseMediaWatcherService: FuseMediaWatcherService) {}

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
     * On backdrop clicked
     */
    onBackdropClicked(): void {
        this.opened = false;
    }
    public closeSidebar($event): void {
        this.opened = $event;
    }
    public openSidebar(): void {
        this.opened = true;
    }
}
