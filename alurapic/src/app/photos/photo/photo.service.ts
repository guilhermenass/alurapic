import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Photo } from './photo';

const API = 'http://localhost:3000';

@Injectable()
export class PhotoService {

    constructor(private http: HttpClient) {

    }

    listFromUser(userName: string): Observable<any> {
        return this.http
            .get<Photo[]>(`${API}/${userName}/photos`);
    }

    listFromUserPaginated(userName: string, page: number) {
        const params = new HttpParams().append('page', page.toString());
        return this.http
            .get<Photo[]>(`${API}/${userName}/photos`, { params } );
    }
}
