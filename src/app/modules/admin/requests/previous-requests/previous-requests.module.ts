import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { PreviousRequestsComponent } from './previous-requests.component';
import { SharedModule } from 'app/shared/shared.module';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FuseMediaWatcherModule } from '@fuse/services/media-watcher';
import { RequestsTableModule } from 'app/modules/common/requests-table/requests-table.module';
import { SidebarReportModule } from 'app/modules/common/sidebar-report/sidebar-report.module';

const routes: Route[] = [
    {
        path: '',
        component: PreviousRequestsComponent,
    },
];

@NgModule({
    declarations: [PreviousRequestsComponent],
    imports: [
        RouterModule.forChild(routes),
        SharedModule,
        MatTabsModule,
        MatSidenavModule,
        FuseMediaWatcherModule,
        RequestsTableModule,
        SidebarReportModule
    ],
})
export class PreviousRequestsModule {}
