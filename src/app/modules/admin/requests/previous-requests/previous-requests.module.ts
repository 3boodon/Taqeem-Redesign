import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { PreviousRequestsComponent } from './previous-requests.component';
import { SharedModule } from 'app/shared/shared.module';

const routes: Route[] = [
    {
        path: '',
        component: PreviousRequestsComponent,
    },
];

@NgModule({
    declarations: [ PreviousRequestsComponent],
    imports: [RouterModule.forChild(routes),SharedModule],
})
export class PreviousRequestsModule {}
