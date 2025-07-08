import { inject, Injectable } from '@angular/core';
import { InstitutionModel } from '../models/institution.model';
import { env } from '../../../../../environment/environment';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Institution {

  private baseUrl = env.baseUrl;
  private http = inject(HttpClient);

  /**
   * 
   * @param institution 
   * @returns 
   */
  createInstitution( institution: InstitutionModel): Promise<InstitutionModel> {
    return firstValueFrom(
      this.http.post<InstitutionModel>(`${this.baseUrl}/institution`, institution).pipe(
        map(response => response)
      )
    )
  }

  updateInstitution() {

  }

  constructor() { }
}
