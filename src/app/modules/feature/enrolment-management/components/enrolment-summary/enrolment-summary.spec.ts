import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrolmentSummary } from './enrolment-summary';

describe('EnrolmentSummary', () => {
  let component: EnrolmentSummary;
  let fixture: ComponentFixture<EnrolmentSummary>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EnrolmentSummary]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnrolmentSummary);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
