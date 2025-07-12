import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCampus } from './add-campus';

describe('AddCampus', () => {
  let component: AddCampus;
  let fixture: ComponentFixture<AddCampus>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddCampus]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCampus);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
