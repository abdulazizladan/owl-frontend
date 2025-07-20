import { Component, inject, computed, signal } from '@angular/core';
import { AnnouncementsStore } from '../../store/announncements.store';
import { ChartConfiguration, ChartType, ChartOptions } from 'chart.js';

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

  barChartType: ChartType = 'bar';
  barChartLabels: string[] = ['Q1', 'Q2', 'Q3', 'Q4'];
  barChartData: ChartConfiguration['data'] = {
    labels: this.barChartLabels,
    datasets: [
      {
        data: [2189, 2560, 1800, 2650],
        label: 'Announcements',
        backgroundColor: '#1976d2',
        borderColor: '#1976d2',
        hoverBackgroundColor: '#1565c0',
        hoverBorderColor: '#1565c0',
      }
    ]
  };
  barChartOptions: ChartOptions = {
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: { enabled: true }
    },
    scales: {
      x: {},
      y: { beginAtZero: true }
    }
  };
  barChartColors = [
    {
      backgroundColor: '#1976d2',
      borderColor: '#1976d2',
      hoverBackgroundColor: '#1565c0',
      hoverBorderColor: '#1565c0',
    }
  ];

  onFilter(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.filterValue.set(value);
  }
}
