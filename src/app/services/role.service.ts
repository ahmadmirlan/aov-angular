import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Roles} from '../model/roles';
import {catchError} from 'rxjs/operators';

@Injectable()
export class RoleService {

  constructor(private http: HttpClient) { }

  getRoles(): Observable<Roles[]> {
    return this.http.get<Roles[]>('server/api/roles')
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }
}
