import { NgModule } from '@angular/core';
import { LoadingComponent } from './loading.component';
import { LoadingService } from './loading.service';
import { CommonModule } from '@angular/common';
import { LoadingInterceptor } from './loading.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
    declarations: [LoadingComponent],
    exports: [LoadingComponent],
    providers: [
        LoadingService,
        LoadingInterceptor,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: LoadingInterceptor,
            multi: true
        }
    ],
    imports: [CommonModule]
})

export class LoadingModule {

}
