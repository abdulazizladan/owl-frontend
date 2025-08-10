import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewEnrolment } from './new-enrolment';

describe('NewEnrolment', () => {
  let component: NewEnrolment;
  let fixture: ComponentFixture<NewEnrolment>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewEnrolment]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewEnrolment);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
