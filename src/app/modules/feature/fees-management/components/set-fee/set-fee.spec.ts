import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetFee } from './set-fee';

describe('SetFee', () => {
  let component: SetFee;
  let fixture: ComponentFixture<SetFee>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SetFee]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetFee);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
