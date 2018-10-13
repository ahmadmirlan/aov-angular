import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Hero} from '../model/hero';
import {HttpClient} from '@angular/common/http';
import {catchError} from 'rxjs/operators';

@Injectable()
export class HeroService {

  constructor(private http: HttpClient) { }

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>('server/api/heroes').pipe(
      catchError((error: any) => Observable.throw(error.json()))
    );
  }

  getHero(heroId: number): Observable<Hero> {
    return this.http.get<Hero>(`server/api/heroes/${heroId}`)
      .pipe(catchError((error: any) => Observable.throw(error.json )));
  }

  createHero(hero: Hero): Observable<Hero> {
    return this.http.post<Hero>('server/api/heroes', hero)
      .pipe(catchError((error: any) => Observable.throw(error.json)));
  }
}
