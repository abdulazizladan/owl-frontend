import { Component, inject, OnInit } from '@angular/core';
import { ticketsStore } from '../../store/ticket.store';

@Component({
  selector: 'tickets-summary',
  standalone: false,
  templateUrl: './summary.html',
  styleUrl: './summary.scss'
})
export class Summary implements OnInit{
  
  public store = inject(ticketsStore)

  ngOnInit(): void {
    this.store.loadTickets()
  }
}
