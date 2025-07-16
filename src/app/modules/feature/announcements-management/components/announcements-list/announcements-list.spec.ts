import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnouncementsList } from './announcements-list';

describe('AnnouncementsList', () => {
  let component: AnnouncementsList;
  let fixture: ComponentFixture<AnnouncementsList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AnnouncementsList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnnouncementsList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
