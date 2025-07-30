import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { env } from '../../../../../environment/environment';
import { UserModel } from '../models/user.model';
import { firstValueFrom, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private http = inject(HttpClient);

  private baseUrl = env.baseUrl;


  /**
   * returns array of users
   */
  async getUsers(): Promise<UserModel[]> {
    // This will trigger the store to load users and manage loading state
    return firstValueFrom(
      this.http.get<UserModel[]>(`${this.baseUrl}/user`).pipe(
        map(response => response)
    ))
  }

  /**
   * 
   * @param id 
   * @returns 
   */
  async getUserById( id: string ): Promise<UserModel> {
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
  async addUser( user: UserModel ): Promise<UserModel> {
    return firstValueFrom(
      this.http.post<{success: boolean, data: UserModel, message: string}>(`${this.baseUrl}/user`, user).pipe(
        map(response => response.data)
    ))
  }

  /**
   * 
   * @param id 
   * @param user 
   * @returns 
   */
  async updateUser( id: string, user: UserModel): Promise<UserModel> {
    return firstValueFrom(
      this.http.put<UserModel>(`${this.baseUrl}/${id}`, user).pipe(
        map(response => response)
    ))
  }

  /**
   * 
   * @param id 
   */
  async toggleUserStatus(id: string) {
    return firstValueFrom(
      this.http.put<UserModel>(`${this.baseUrl}/${id}/status`, {}).pipe(
        map(response => response)
    ))
  }
}
