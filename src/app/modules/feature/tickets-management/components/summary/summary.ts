import { Component, inject, OnInit, computed, signal } from '@angular/core';
import { ticketsStore } from '../../store/ticket.store';

@Component({
  selector: 'tickets-summary',
  standalone: false,
  templateUrl: './summary.html',
  styleUrl: './summary.scss'
})
export class Summary implements OnInit {
  public store = inject(ticketsStore);

  filterValue = signal('');

  filteredTickets = computed(() => {
    const filter = this.filterValue().toLowerCase();
    return this.store.tickets().filter(ticket =>
      ticket.title.toLowerCase().includes(filter) ||
      ticket.status.toLowerCase().includes(filter)
    );
  });

  ngOnInit(): void {
    this.store.loadTickets();
  }

  onFilter(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.filterValue.set(value);
  }

  viewTicket(ticket: any) {
    alert('View ticket: ' + ticket.title);
  }

  updateTicket(ticket: any) {
    alert('Update ticket: ' + ticket.title);
  }

  replyToTicket(ticket: any) {
    alert('Reply to ticket: ' + ticket.title);
  }

  toggleStatus(ticket: any) {
    this.store.toggleTicketStatus(ticket.id);
  }
}
