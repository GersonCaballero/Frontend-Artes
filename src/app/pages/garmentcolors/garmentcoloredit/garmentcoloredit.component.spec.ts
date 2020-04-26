import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GarmentcoloreditComponent } from './garmentcoloredit.component';

describe('GarmentcoloreditComponent', () => {
  let component: GarmentcoloreditComponent;
  let fixture: ComponentFixture<GarmentcoloreditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GarmentcoloreditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GarmentcoloreditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
