import { NgModule } from '@angular/core';
import { PhotoDetailComponent } from './photo-detail.component';
import { CommonModule } from '@angular/common';
import { PhotoModule } from '../photo/photo.module';
import { PhotoCommentsComponent } from './photo-comments/photo-comments.component';
import { RouterModule } from '@angular/router';
import { VMessageModule } from '../../shared/components/vmessage/vmessage.module';
import { ReactiveFormsModule } from '@angular/forms';
import { PhotoOwnerOnlyDirective } from './photo-owner-only/photo-owner-only.directive';
import { ShowIfLoggedModule } from '../../shared/directives/show-if-logged/show-if-logged.module';

@NgModule({
    declarations: [
        PhotoDetailComponent,
        PhotoCommentsComponent,
        PhotoOwnerOnlyDirective

    ],
    imports: [
        CommonModule,
        PhotoModule,
        RouterModule,
        VMessageModule,
        ReactiveFormsModule,
        ShowIfLoggedModule
    ],
    exports: [
        PhotoDetailComponent,
        PhotoCommentsComponent
    ]
})
export class PhotoDetailModule {

}
