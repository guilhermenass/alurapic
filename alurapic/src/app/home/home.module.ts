import { NgModule } from '@angular/core';
import { SigninComponent } from './signin/signin.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { VMessageModule } from '../shared/components/vmessage/vmessage.module';
import { AuthService } from '../core/auth/auth.service';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [SigninComponent],
    imports: [
        ReactiveFormsModule,
        CommonModule,
        VMessageModule,
        RouterModule
    ],
    providers: [AuthService]
})
export class HomeModule {

}
