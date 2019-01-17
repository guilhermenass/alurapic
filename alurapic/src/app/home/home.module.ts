import { NgModule } from '@angular/core';
import { SigninComponent } from './signin/signin.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { VMessageModule } from '../shared/components/vmessage/vmessage.module';
import { AuthService } from '../core/auth/auth.service';
import { RouterModule } from '@angular/router';
import { TokenService } from '../core/token/token.service';
import { SignupComponent } from './signup/signup.component';
import { UserNotTakenValidatorService } from './signup/user-not-taken.validator.service';
import { SignUpService } from './signup/signup.service';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing.module';

@NgModule({
    declarations: [
        SigninComponent,
        SignupComponent,
        HomeComponent
    ],
    imports: [
        ReactiveFormsModule,
        CommonModule,
        VMessageModule,
        RouterModule,
        FormsModule,
        HomeRoutingModule
    ],
    providers: [
        AuthService,
        TokenService,
        UserNotTakenValidatorService,
        SignUpService
    ]
})
export class HomeModule {

}
