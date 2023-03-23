import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { NewRequestComponent } from './new-request.component';
import { SharedModule } from 'app/shared/shared.module';


const routes: Route[] = [
    {
        path: '',
        component: NewRequestComponent,
    },
];

@NgModule({
    declarations: [ NewRequestComponent],
    imports: [RouterModule.forChild(routes), SharedModule],
})
export class NewRequestModule {}
