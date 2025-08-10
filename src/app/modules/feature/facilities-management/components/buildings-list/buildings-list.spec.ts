import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildingsList } from './buildings-list';

describe('BuildingsList', () => {
  let component: BuildingsList;
  let fixture: ComponentFixture<BuildingsList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BuildingsList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuildingsList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
