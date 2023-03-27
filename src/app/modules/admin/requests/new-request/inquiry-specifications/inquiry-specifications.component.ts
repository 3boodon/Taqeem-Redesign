import {
    ChangeDetectorRef,
    Component,
    NgZone,
    OnDestroy,
    OnInit,
    ChangeDetectionStrategy,
    Output,
    EventEmitter,
} from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { FuseMediaWatcherService } from '@fuse/services/media-watcher';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'inquiry-specifications',
    templateUrl: './inquiry-specifications.component.html',
    // encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InquirySpecificationsComponent implements OnInit, OnDestroy {
    @Output() showDetail = new EventEmitter<boolean>();
    drawerMode: 'over' | 'side' = 'side';
    opened: boolean = false;
    isScreenSmall: boolean;
    drawerOpened: boolean = false;
    verticalStepperForm: FormGroup;
    isEditable = false;

    public percentage: number = 25;
    private _unsubscribeAll: Subject<any> = new Subject<any>();

    /**
     * Constructor
     */
    constructor(
        private _changeDetectorRef: ChangeDetectorRef,
        private _fuseMediaWatcherService: FuseMediaWatcherService,
        private _ngZone: NgZone,
        private _formBuilder: FormBuilder
    ) {}


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
                // Set the drawerMode if the given breakpoint is active
                if (matchingAliases.includes('lg')) {
                    this.drawerMode = 'side';
                } else {
                    this.drawerMode = 'over';
                }
                // Mark for check
                this._changeDetectorRef.markForCheck();
            });
        // Vertical stepper form
        this.verticalStepperForm = this._formBuilder.group({
            step1: this._formBuilder.group({
                vehicleMaker: ['', [Validators.required]],
                vehicleModel: ['', [Validators.required]],
                vehicleColor: ['', [Validators.required]],
                vehicleYear: ['', [Validators.required]],
            }),
            step2: this._formBuilder.group({
                odometer: ['', Validators.required],
            }),
            step3: this._formBuilder.group({
                cardHolder: ['', Validators.required],
                cardNumber: ['', Validators.required],
                expirationDate: ['', Validators.required],
                cvv: ['', Validators.required],
                country: ['', Validators.required],
                zipLocation: ['', Validators.required],
            }),
        });
    }
    /**
     * On destroy
     */
    ngOnDestroy(): void {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next(null);
        this._unsubscribeAll.complete();
    }
    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------


    /**
     * Track by function for ngFor loops
     *
     * @param index
     * @param item
     */
    trackByFn(index: number, item: any): any {
        return item.id || index;
    }

    /**
     * On backdrop clicked
     */
    public selectionChange(event): void {
        if (event.selectedIndex === 3) {
            this.showDetail.emit(true);
        }
    }
}
