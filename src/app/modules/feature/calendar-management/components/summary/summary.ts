import { Component } from '@angular/core';

@Component({
  selector: 'app-summary',
  standalone: false,
  templateUrl: './summary.html',
  styleUrl: './summary.scss'
})
export class Summary {
  academicTerms = [
    { name: 'First Term', start: '2024-09-09', end: '2024-12-13', current: false },
    { name: 'Second Term', start: '2025-01-06', end: '2025-04-11', current: true },
    { name: 'Third Term', start: '2025-04-28', end: '2025-07-18', current: false },
  ];

  holidays = [
    { name: 'Independence Day', date: new Date(2024, 9, 1) },
    { name: 'Christmas', date: new Date(2024, 11, 25) },
    { name: 'New Year', date: new Date(2025, 0, 1) },
    { name: 'Eid al-Fitr', date: new Date(2025, 2, 31) },
  ];

  today = new Date();

  holidayDates = this.holidays.map(h => h.date.toDateString());

  dateClass = (d: Date) => {
    const dateStr = d.toDateString();
    return this.holidayDates.includes(dateStr) ? 'holiday-date' : '';
  };
}
