import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { env } from '../../../../../environment/environment';
import { UserModel } from '../models/user.model';
import { firstValueFrom, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Users {

  private http = inject(HttpClient);

  private baseUrl = env.baseUrl;


  /**
   * returns array of users
   */
  getUsers(): Promise<UserModel[]> {
    // This will trigger the store to load users and manage loading state
    return firstValueFrom(
      this.http.get<UserModel[]>(`${this.baseUrl}/users`).pipe(
        map(response => response)
    ))
  }

  /**
   * 
   * @param id 
   * @returns 
   */
  getUser( id: string ): Promise<UserModel> {
    return firstValueFrom(
      this.http.get<UserModel>(`${this.baseUrl}/${id}`).pipe(
        map(response => response)
    ))
  }

  /**
   * 
   * @param user 
   * @returns 
   */
  addUser( user: UserModel ): Promise<UserModel> {
    return firstValueFrom(
      this.http.post<UserModel>(`${this.baseUrl}`, user).pipe(
        map(response => response)
    ))
  }

  /**
   * 
   * @param id 
   * @param user 
   * @returns 
   */
  updateUser( id: string, user: UserModel): Promise<UserModel> {
    return firstValueFrom(
      this.http.put<UserModel>(`${this.baseUrl}/${id}`, user).pipe(
        map(response => response)
    ))
  }

  /**
   * 
   * @param id 
   */
  toggleUserStatus(id: string) {
    //return this.store.toggleUserStatus(id);
  }
}
