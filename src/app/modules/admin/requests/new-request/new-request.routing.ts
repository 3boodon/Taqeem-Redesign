import { Route } from '@angular/router';
import { InqueryInformationComponent } from './inquery-information/inquery-information.component';
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
                        component: InqueryInformationComponent,
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
