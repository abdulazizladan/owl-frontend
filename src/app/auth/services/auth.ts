import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Auth {

  private http = inject(HttpClient);

  login() {

  }

  resetPassword() {

  }
}
