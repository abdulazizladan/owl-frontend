import { Component, OnInit, inject, computed } from '@angular/core';
import { institutionStore } from '../../store/institution.store';
import { ChartConfiguration, ChartOptions, ChartType } from 'chart.js';

@Component({
  selector: 'institution-summary',
  standalone: false,
  templateUrl: './summary.html',
  styleUrl: './summary.scss'
})
export class Summary implements OnInit {
  public store = inject(institutionStore);

  institution = computed(() => this.store.institution());
  loading = computed(() => this.store.loading());
  error = computed(() => this.store.error());

  pieChartType: ChartType = "pie";
  pieChartLabels: string[] = ['teachers', 'cleaners', 'gardeners', 'medical staff']
  pieChartData: ChartConfiguration['data'] = {
    labels: this.pieChartLabels,
    datasets: [
      {
        data: [32, 8, 8, 6],
        label: 'staff count'
      }
    ]
  }

  ngOnInit(): void {
    this.store.loadInstitution();
  }

  refresh() {
    this.store.loadInstitution();
  }
}
