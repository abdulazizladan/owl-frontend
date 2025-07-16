import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAnnouncement } from './add-announcement';

describe('AddAnnouncement', () => {
  let component: AddAnnouncement;
  let fixture: ComponentFixture<AddAnnouncement>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddAnnouncement]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddAnnouncement);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
