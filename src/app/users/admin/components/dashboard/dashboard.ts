import { Component, inject, OnInit } from '@angular/core';
import { AdminStore } from '../../store/admin.store';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class Dashboard implements OnInit{
  
  public store = inject(AdminStore)

  ngOnInit() {
    this.store.loadData();  
  }
}
