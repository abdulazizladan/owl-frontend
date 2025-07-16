import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnouncementDetails } from './announcement-details';

describe('AnnouncementDetails', () => {
  let component: AnnouncementDetails;
  let fixture: ComponentFixture<AnnouncementDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AnnouncementDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnnouncementDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
