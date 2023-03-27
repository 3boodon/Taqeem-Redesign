import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { NewRequestComponent } from './new-request.component';
import { SharedModule } from 'app/shared/shared.module';
import { MatStepperModule } from '@angular/material/stepper';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { InquiryTypeComponent } from './inquiry-type/inquiry-type.component';
import { InquiryInformationComponent } from './inquiry-information/inquiry-information.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { InquirySpecificationsComponent } from './inquiry-specifications/inquiry-specifications.component';
import { SidebarReportModule } from 'app/modules/common/sidebar-report/sidebar-report.module';


const routes: Route[] = [
    {
        path: '',
        component: NewRequestComponent,
        children : [
            {
                path     : '',
                component: InquiryTypeComponent,
            }
        ]
    },
];

@NgModule({
    declarations: [
        NewRequestComponent,
        InquiryTypeComponent,
        InquiryInformationComponent,
        InquirySpecificationsComponent
    ],
    imports: [
        RouterModule.forChild(routes),
        MatStepperModule,
        MatSlideToggleModule,
        MatMomentDateModule,
        SharedModule,
        SidebarReportModule
    ],
})
export class NewRequestModule {}
