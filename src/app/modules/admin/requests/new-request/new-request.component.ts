import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'new-request',
    templateUrl: './new-request.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewRequestComponent {
    /**
     * Constructor
     */
    constructor() {}
}
