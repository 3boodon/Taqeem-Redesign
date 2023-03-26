import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarReportComponent } from './sidebar-report.component';
import { SharedModule } from 'app/shared/shared.module';


@NgModule({
  declarations: [SidebarReportComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[SidebarReportComponent]
})
export class SidebarReportModule { }
