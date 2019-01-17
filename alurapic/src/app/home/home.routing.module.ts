import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { LoginGuard } from '../core/auth/login.guard.';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        canActivate: [LoginGuard],
        children: [
            {
                path: '',
                component: SigninComponent,
                canActivate: [LoginGuard]
            },
            {
                path: 'signup',
                component: SignupComponent
            },
        ]
    }
];

@NgModule({
    // forChild é usado para lazy loading
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class HomeRoutingModule {

}
