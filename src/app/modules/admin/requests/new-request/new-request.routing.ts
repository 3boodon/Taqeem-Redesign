import { Route } from '@angular/router';
import { InquiryInformationComponent } from './inquiry-information/inquiry-information.component';
import { InqueryTypeComponent } from './inquery-type/inquery-type.component';
import { NewRequestComponent } from './new-request.component';

export const newRequesrRoutes: Route[] = [
    {
        path     : '',
        component: NewRequestComponent,
        children : [
            {
                path     : '',
                component: InqueryTypeComponent,
                children : [
                    {
                        path     : 'InqueryInformation',
                        component: InquiryInformationComponent,
                        // children : [
                        //     {
                        //         path   : 'InueryInformation',
                        //     }
                        // ]
                    }
                ]
            }
        ]
    }
];
