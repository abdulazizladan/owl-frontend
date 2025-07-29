import { Component, inject, OnInit } from '@angular/core';
import { AdminStore } from '../../store/admin.store';
import { ChartConfiguration, ChartOptions, ChartType } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class Dashboard implements OnInit{
  
  public store = inject(AdminStore);

  ngOnInit() {
    this.store.loadData();  
  }

  barChartType: ChartType = "bar";

  barChartLabels: string[] = ['2022', '2023', '2024', '2025'];
  barChartData: ChartConfiguration['data'] = {
    labels: this.barChartLabels,
    datasets: [
      {
        data: [2189, 2560, 1800, 2650],
        label: 'Enrolment',
        backgroundColor: '#1565c0',
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
    },
  };
  barChartColors = [
    {
      backgroundColor: '#0000ff',
      borderColor: '#1976d2',
      hoverBackgroundColor: '#0000ff',
      hoverBorderColor: '#1565c0',
    }
  ];

}
