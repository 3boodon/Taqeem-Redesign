import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { NewRequestComponent } from './new-request.component';
import { SharedModule } from 'app/shared/shared.module';
import { MatStepperModule } from '@angular/material/stepper';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { InqueryTypeComponent } from './inquery-type/inquery-type.component';
import { InquiryInformationComponent } from './inquiry-information/inquiry-information.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { FuseAlertModule } from '@fuse/components/alert';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSidenavModule } from '@angular/material/sidenav';
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
        MatButtonModule,
        MatFormFieldModule,
        MatStepperModule,
        MatIconModule,
        MatInputModule,
        MatRadioModule,
        MatSelectModule,
        MatSidenavModule,
        MatSlideToggleModule,
        FuseAlertModule,
        MatCheckboxModule,
        MatDatepickerModule,
        MatMomentDateModule,
        SharedModule
    ],
})
export class NewRequestModule {}
