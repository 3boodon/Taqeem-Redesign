import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FuseScrollbarModule } from '@fuse/directives/scrollbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        FuseScrollbarModule,
        ReactiveFormsModule,
        MatIconModule,
        MatButtonModule,

    ],
    exports: [
        CommonModule,
        FormsModule,
        FuseScrollbarModule,
        ReactiveFormsModule,
        MatIconModule,
        MatButtonModule,

    ]
})
export class SharedModule
{
}
