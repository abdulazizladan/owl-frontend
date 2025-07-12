import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampusDetails } from './campus-details';

describe('CampusDetails', () => {
  let component: CampusDetails;
  let fixture: ComponentFixture<CampusDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CampusDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CampusDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
