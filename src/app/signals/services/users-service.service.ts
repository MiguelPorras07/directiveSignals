import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { SingleUserResponse, User } from '../interfaces/user-request.interface';

/* Como se harán peticiones http, y el servicio está proveído en el root, se importará en el "app.module.ts",  */

@Injectable({
  providedIn: 'root'
})
export class UsersServiceService {

  private http = inject( HttpClient );
  /* necesitamos un backend que se va a tomar para este curso de reqres.in */

  private baseUrl = 'https://reqres.in/api/users';


  getUserById( id: number ): Observable<User> {

    return this.http.get<SingleUserResponse>(`${ this.baseUrl }/${ id }`)
      .pipe(
        map( response => response.data ),
        tap( console.log )
      );
  }

}
