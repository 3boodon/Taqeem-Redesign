import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { FuseCardModule } from '@fuse/components/card';
import { SharedModule } from 'app/shared/shared.module';
import { AuthConfirmationRequiredComponent } from 'app/modules/auth/confirmation-required/confirmation-required.component';
import { authConfirmationRequiredRoutes } from 'app/modules/auth/confirmation-required/confirmation-required.routing';
import { AuthBackgroundModule } from 'app/modules/common/auth-background/auth-background.module';

@NgModule({
    declarations: [AuthConfirmationRequiredComponent],
    imports: [
        RouterModule.forChild(authConfirmationRequiredRoutes),
        MatButtonModule,
        FuseCardModule,
        AuthBackgroundModule,
        SharedModule,
    ],
})
export class AuthConfirmationRequiredModule {}
