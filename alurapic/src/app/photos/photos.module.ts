import { NgModule } from '@angular/core';
import { PhotoService } from './photo/photo.service';
import { PhotoListResolver } from './photo-list/photo-list.resolver';
import { PhotoModule } from './photo/photo.module';
import { PhotoFormModule } from './photo-form/photo-form.module';
import { PhotoListModule } from './photo-list/photo-list.module';

@NgModule({
    imports: [
        PhotoModule,
        PhotoFormModule,
        PhotoListModule
    ],
    providers: [
        PhotoService,
        PhotoListResolver
    ]
})
export class PhotosModule {

}
