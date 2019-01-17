import { NgModule } from '@angular/core';
import { PhotoService } from './photo/photo.service';
import { PhotoListResolver } from './photo-list/photo-list.resolver';
import { PhotoModule } from './photo/photo.module';
import { PhotoFormModule } from './photo-form/photo-form.module';
import { PhotoListModule } from './photo-list/photo-list.module';
import { PhotoDetailComponent } from './photo-detail/photo-detail.component';
import { CommonModule } from '@angular/common';
import { PhotoDetailModule } from './photo-detail/photo-detail.module';

@NgModule({
    imports: [
        CommonModule,
        PhotoModule,
        PhotoFormModule,
        PhotoListModule,
        PhotoDetailModule
    ],
    providers: [
        PhotoService,
        PhotoListResolver
    ]
})
export class PhotosModule {

}
