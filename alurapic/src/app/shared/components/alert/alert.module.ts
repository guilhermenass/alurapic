import { NgModule, Input } from '@angular/core';
import { AlertComponent } from './alert.component';
import { CommonModule } from '@angular/common';
import { AlertService } from './alert.service';
import { Alert } from './alert';

@NgModule({
    declarations: [AlertComponent],
    exports: [AlertComponent],
    imports: [CommonModule]
})

export class AlertModule {


}
