import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { LoadingType } from './loading-type';
import { startWith } from 'rxjs/operators';

@Injectable()
export class LoadingService {

    loadingSubject = new Subject<LoadingType>();

    getLoading() {
        return this.loadingSubject
        .asObservable()
        .pipe(startWith(LoadingType.STOPPED));
    }

    start() {
        this.loadingSubject.next(LoadingType.LOADING);
    }

    stop() {
        this.loadingSubject.next(LoadingType.STOPPED);
    }

}
