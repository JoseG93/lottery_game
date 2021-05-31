import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError,  } from 'rxjs';
import { map, catchError }  from  'rxjs/operators';
import { Ball } from '../common/interfaces/ball';

@Injectable({
  providedIn: 'root'
})
export class BallsService {

  constructor(
    private http: HttpClient
  ) { }

  getBalls(): Observable<Ball[]> {
    return this.http.get('/balls')
      .pipe(
        map(res => res as Ball[]),
        catchError(e => { return throwError(e)})
      );
  }
}
