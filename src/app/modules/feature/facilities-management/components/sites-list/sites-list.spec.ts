import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitesList } from './sites-list';

describe('SitesList', () => {
  let component: SitesList;
  let fixture: ComponentFixture<SitesList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SitesList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SitesList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
