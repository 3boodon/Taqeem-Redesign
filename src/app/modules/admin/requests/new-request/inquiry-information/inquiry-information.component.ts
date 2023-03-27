import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, HostListener, NgZone, OnDestroy, OnInit, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { FuseMediaWatcherService } from '@fuse/services/media-watcher';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector       : 'inquiry-information',
    templateUrl    : './inquiry-information.component.html',
    encapsulation  : ViewEncapsulation.None,
    // changeDetection: ChangeDetectionStrategy.OnPush
})
export class InquiryInformationComponent implements OnInit, OnDestroy
{
    @ViewChild('messageInput') messageInput: ElementRef;

    @Output() showDetail = new EventEmitter<boolean>();
    drawerMode: 'over' | 'side' = 'side';
    opened: boolean = false;
  public  complate: number=25;
    drawerOpened: boolean = false;
    verticalStepperForm: FormGroup;
    isEditable = false;
    private _unsubscribeAll: Subject<any> = new Subject<any>();

    /**
     * Constructor
     */
    constructor(
        private _changeDetectorRef: ChangeDetectorRef,
        private _fuseMediaWatcherService: FuseMediaWatcherService,
        private _formBuilder: FormBuilder
    )
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {

        // Subscribe to media changes
        this._fuseMediaWatcherService.onMediaChange$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(({matchingAliases}) => {

                // Set the drawerMode if the given breakpoint is active
                if ( matchingAliases.includes('lg') )
                {
                    this.drawerMode = 'side';
                }
                else
                {
                    this.drawerMode = 'over';
                }

                // Mark for check
                this._changeDetectorRef.markForCheck();
            });

              // Vertical stepper form
        this.verticalStepperForm = this._formBuilder.group({
            step1: this._formBuilder.group({
                serialNumber   : ['', [Validators.required]],
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
            })
        });
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void
    {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next(null);
        this._unsubscribeAll.complete();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Open the contact info
     */
    openContactInfo(): void
    {
        // Open the drawer
        // this.drawerOpened = true;

        // Mark for check
        this._changeDetectorRef.markForCheck();
    }

    /**
     * Reset the chat
     */
    resetChat(): void
    {
        // Close the contact info in case it's opened
        // this.drawerOpened = false;

        // Mark for check
        this._changeDetectorRef.markForCheck();
    }

    /**
     * Toggle mute notifications
     */
    toggleMuteNotifications(): void
    {
    }

    /**
     * Track by function for ngFor loops
     *
     * @param index
     * @param item
     */
    trackByFn(index: number, item: any): any
    {
        return item.id || index;
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
    public selectionChange(event): void {
      if(event.selectedIndex===3){
        this.showDetail.emit(true);
      }
    }
}
