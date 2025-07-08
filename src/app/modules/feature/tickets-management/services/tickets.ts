import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { firstValueFrom, map, Observable } from 'rxjs';
import { TicketModel } from '../models/ticket.model';

@Injectable({
  providedIn: 'root'
})
export class TicketsService {

  private http = inject(HttpClient);
  /**
   * 
   * @returns 
   */
  async getAll(): Promise<TicketModel[]> {
    return firstValueFrom(
      this.http.get<TicketModel[]>(``).pipe(
        map(response => response)
      )
    )
  }

  /**
   * 
   * @param id 
   * @returns 
   */
  getById(id: string): Promise<TicketModel> {
    return firstValueFrom(
      this.http.get<TicketModel>(``).pipe(
        map(response => response)
      )
    )
  }

  /**
   * 
   * @returns 
   */
  getByUserId(): Promise<TicketModel[]> {
    return firstValueFrom(
      this.http.get<TicketModel[]>(``).pipe(
        map(response => response)
      )
    )
  }

  /**
   * 
   * @param id 
   * @param response 
   * @returns 
   */
  reply(id: string, response: string) {
    return firstValueFrom(
      this.http.post<TicketModel>(`/${id}`, response).pipe(
        map(response => response)
      )
    )
  }

}
