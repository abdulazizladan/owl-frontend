import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private readonly = inject(HttpClient);

  constructor() { }

  getSummary() {
    
  }
}
