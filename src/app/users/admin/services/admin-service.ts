import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { env } from '../../../../environment/environment';
import { firstValueFrom, map } from 'rxjs';

interface UsersSummary {
    total: number,
    active: number,
    suspended: number,
    removed: number,
    admin: number,
    directors: number,
    managers: number,
    students: number,
    staff: number,
    guardians: number
}

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private readonly http = inject(HttpClient);

  private readonly baseUrl = env.baseUrl;

  constructor() { }

  async getUsersSummary(): Promise<UsersSummary> {
    const summary = await this.http.get<{data: UsersSummary, message: string, success: boolean}>(`${this.baseUrl}/user/stats`).pipe(
      map(res => res.data)
    )
    return firstValueFrom(summary);
  }
}
