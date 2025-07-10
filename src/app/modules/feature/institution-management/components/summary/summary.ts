import { Component, OnInit, inject, computed } from '@angular/core';
import { institutionStore } from '../../store/institution.store';

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

  ngOnInit(): void {
    this.store.loadInstitution();
  }

  refresh() {
    this.store.loadInstitution();
  }
}
