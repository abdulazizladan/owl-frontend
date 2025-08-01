import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { LoginData } from '../models/loginData.model';
import { env } from '../../../environment/environment'
import { firstValueFrom, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly http: HttpClient = inject(HttpClient);

  login(data: LoginData): Promise<string> {
    const loginUrl = `${env.baseUrl}/auth/login`;
    //return this.http.post<{ access_token: string }>(loginUrl, data).pipe(
    //  map(response => response.access_token)
    //);
    return firstValueFrom(
      this.http.post<{ access_token: string }>(loginUrl, data).pipe(
        map(response => response.access_token)
      )
    )
  }
}
