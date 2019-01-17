import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserService } from './user/user.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TokenService } from './token/token.service';
import { RequestInterceptor } from './auth/request.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';
import { AuthGuard } from './auth/auth.guard';
import { LoginGuard } from './auth/login.guard.';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    declarations: [HeaderComponent, FooterComponent],
    imports: [
        CommonModule,
        RouterModule,
        BrowserModule
    ],
    exports: [
        HeaderComponent,
        FooterComponent
    ],
    providers: [
        UserService,
        AuthGuard,
        LoginGuard,
        TokenService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: RequestInterceptor,
            multi: true
        }
    ]
})
export class CoreModule {

}
