import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { env } from '../../../../../environment/environment';
import { User } from '../models/user.model';
import { firstValueFrom, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Users {

  private http = inject(HttpClient);

  private baseUrl = env.baseUrl;

  getUsers(): Promise<User[]> {
    return firstValueFrom(
      this.http.get<User[]>(`${this.baseUrl}`).pipe(
        map(response => response)
      )
    )
  }

  getUser( id: string ) {
    return this.http.get(`${this.baseUrl}/${id}`).pipe(

    )
  }

  addUser( user: User ) {
    return this.http.post(`${this.baseUrl}`, user).pipe(

    )
  }

  updateUser( id: string, user: User) {
    return this.http.put(`${this.baseUrl}/${id}`, user).pipe(
      
    )
  }

}
