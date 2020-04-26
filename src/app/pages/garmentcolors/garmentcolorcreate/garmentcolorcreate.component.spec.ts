import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GarmentcolorcreateComponent } from './garmentcolorcreate.component';

describe('GarmentcolorcreateComponent', () => {
  let component: GarmentcolorcreateComponent;
  let fixture: ComponentFixture<GarmentcolorcreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GarmentcolorcreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GarmentcolorcreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
