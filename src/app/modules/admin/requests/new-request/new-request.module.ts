import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { NewRequestComponent } from './new-request.component';
import { SharedModule } from 'app/shared/shared.module';
import { MatStepperModule } from '@angular/material/stepper';
import { InqueryTypeComponent } from './inquery-type/inquery-type.component';
import { InqueryInformationComponent } from './inquery-information/inquery-information.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
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
        children: [
            {
                path: '',
                component: InqueryTypeComponent,
                children: [
                    {
                        path: '',
                        component: InqueryInformationComponent,
                        children: [
                            {
                                path: ':id',
                            },
                        ],
                    },
                ],
            },
        ],
    },
];

@NgModule({
    declarations: [
        NewRequestComponent,
        InqueryTypeComponent,
        InqueryInformationComponent,
    ],
    imports: [
        RouterModule.forChild(newRequesrRoutes),
        SharedModule,
        MatStepperModule,
        MatButtonModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatRadioModule,
        MatSelectModule,
    ],
})
export class NewRequestModule {}
