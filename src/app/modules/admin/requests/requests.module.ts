import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { RequestsComponent } from 'app/modules/admin/requests/requests.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

const requestsRoutes: Route[] = [
    {
        path: '',
        component: RequestsComponent,
    },
];

@NgModule({
    declarations: [RequestsComponent],
    imports: [
        RouterModule.forChild(requestsRoutes),
        MatIconModule,
        MatButtonModule,
    ],
})
export class RequestsModule {}
