import { Component, inject, computed, signal } from '@angular/core';
import { AnnouncementsStore } from '../../store/announncements.store';

@Component({
  selector: 'app-summary',
  standalone: false,
  templateUrl: './summary.html',
  styleUrl: './summary.scss'
})
export class Summary {
  public announcementsStore = inject(AnnouncementsStore);

  filterValue = signal('');

  filteredAnnouncements = computed(() => {
    const filter = this.filterValue().toLowerCase();
    return this.announcementsStore.announcements().filter(a =>
      a.subject.toLowerCase().includes(filter) ||
      a.body.toLowerCase().includes(filter)
    );
  });

  displayedColumns: string[] = ['title', 'summary', 'datePublished', 'status', 'actions'];

  onFilter(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.filterValue.set(value);
  }
}
