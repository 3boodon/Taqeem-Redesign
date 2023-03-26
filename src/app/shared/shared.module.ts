import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FuseScrollbarModule } from '@fuse/directives/scrollbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { FuseAlertModule } from '@fuse/components/alert';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        FuseScrollbarModule,
        ReactiveFormsModule,
        MatIconModule,
        MatButtonModule,
        MatSidenavModule,
        MatDatepickerModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatInputModule,
        MatRadioModule,
        MatSelectModule,
        FuseAlertModule,
    ],
    exports: [
        CommonModule,
        FormsModule,
        FuseScrollbarModule,
        ReactiveFormsModule,
        MatIconModule,
        MatButtonModule,
        MatSidenavModule,
        MatDatepickerModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatInputModule,
        MatRadioModule,
        MatSelectModule,
        FuseAlertModule,
    ],
})
export class SharedModule {}
