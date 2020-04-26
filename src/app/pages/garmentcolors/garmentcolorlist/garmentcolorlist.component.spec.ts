import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GarmentcolorlistComponent } from './garmentcolorlist.component';

describe('GarmentcolorlistComponent', () => {
  let component: GarmentcolorlistComponent;
  let fixture: ComponentFixture<GarmentcolorlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GarmentcolorlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GarmentcolorlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
