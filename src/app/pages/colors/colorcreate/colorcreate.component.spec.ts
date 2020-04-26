import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorcreateComponent } from './colorcreate.component';

describe('ColorcreateComponent', () => {
  let component: ColorcreateComponent;
  let fixture: ComponentFixture<ColorcreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorcreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorcreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
