import { Component, OnInit } from '@angular/core';
import { Photo } from '../photo/photo';
import { ActivatedRoute } from '@angular/router';
import { PhotoService } from '../photo/photo.service';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

  photos: Photo[] = [];
  filter = '';

  userName: string;
  currentPage = 1;
  hasMore = true;

  constructor(private activatedRoute: ActivatedRoute,
              private photoService: PhotoService) { }


  ngOnInit(): void {
    /** Subscribe para pegar parametro atualizado sempre que a rota mudar */
    this.activatedRoute.params.subscribe(params => {
      this.userName = params.userName;
      this.photos = this.activatedRoute.snapshot.data['photos'];
    });
}



load() {
    this.photoService
        .listFromUserPaginated(this.userName, ++this.currentPage)
        .subscribe(photos => {
            this.filter = '';
            this.photos = this.photos.concat(photos);
            if (!photos.length) {
              this.hasMore = false;
            }
        });
}

}
