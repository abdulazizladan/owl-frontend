import { Component, inject, OnInit } from '@angular/core';
import { AuthStore } from '../../../../auth/store/auth.store';

@Component({
  selector: 'app-layout',
  standalone: false,
  templateUrl: './layout.html',
  styleUrl: './layout.scss'
})
export class Layout implements OnInit {

  ngOnInit() {
    
  }

  public authStore = inject(AuthStore);

  logout() {
    this.authStore.logout();
  }

}
