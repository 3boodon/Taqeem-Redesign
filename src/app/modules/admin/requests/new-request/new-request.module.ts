import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { NewRequestComponent } from './new-request.component';
import { SharedModule } from 'app/shared/shared.module';
import { MatStepperModule } from '@angular/material/stepper';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { InqueryTypeComponent } from './inquery-type/inquery-type.component';
import { InquiryInformationComponent } from './inquiry-information/inquiry-information.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { InquirySpecifactionsComponent } from './inquiry-specifactions/inquiry-specifactions.component';

// import { newRequesrRoutes } from './new-request.routing';

// const routes: Route[] = [
//     {
//         path: '',
//         component: NewRequestComponent,
//     },
// ];

const newRequesrRoutes: Route[] = [
    {
        path: '',
        component: NewRequestComponent,
        children : [
            {
                path     : '',
                component: InqueryTypeComponent,
            }
        ]
    },
];

@NgModule({
    declarations: [
        NewRequestComponent,
        InqueryTypeComponent,
        InquiryInformationComponent,
        InquirySpecifactionsComponent
    ],
    imports: [
        RouterModule.forChild(newRequesrRoutes),
        MatStepperModule,
        MatSlideToggleModule,
        MatMomentDateModule,
        SharedModule
    ],
})
export class NewRequestModule {}
