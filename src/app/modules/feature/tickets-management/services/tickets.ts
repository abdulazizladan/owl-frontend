import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { firstValueFrom, map } from 'rxjs';
import { TicketModel } from '../models/ticket.model';

@Injectable({
  providedIn: 'root'
})
export class TicketsService {
  private http = inject(HttpClient);
  private baseUrl = '/api/tickets'; // Adjust as needed

  async createTicket(ticket: TicketModel): Promise<TicketModel> {
    return firstValueFrom(
      this.http.post<TicketModel>(`${this.baseUrl}`, ticket).pipe(
        map(response => response)
      )
    );
  }

  async getAll(): Promise<TicketModel[]> {
    return firstValueFrom(
      this.http.get<TicketModel[]>(`${this.baseUrl}`).pipe(
        map(response => response)
      )
    );
  }

  async getById(id: string): Promise<TicketModel> {
    return firstValueFrom(
      this.http.get<TicketModel>(`${this.baseUrl}/${id}`).pipe(
        map(response => response)
      )
    );
  }

  async getAllByUserId(userId: string): Promise<TicketModel[]> {
    return firstValueFrom(
      this.http.get<TicketModel[]>(`${this.baseUrl}?userId=${userId}`).pipe(
        map(response => response)
      )
    );
  }

  async update(id: string, ticket: TicketModel): Promise<TicketModel> {
    return firstValueFrom(
      this.http.put<TicketModel>(`${this.baseUrl}/${id}`, ticket).pipe(
        map(response => response)
      )
    );
  }

  async reply(id: string, response: string): Promise<TicketModel> {
    return firstValueFrom(
      this.http.post<TicketModel>(`${this.baseUrl}/${id}/reply`, { response }).pipe(
        map(response => response)
      )
    );
  }

  async toggleStatus(id: string): Promise<TicketModel> {
    return firstValueFrom(
      this.http.patch<TicketModel>(`${this.baseUrl}/${id}/toggle-status`, {}).pipe(
        map(response => response)
      )
    );
  }
}
