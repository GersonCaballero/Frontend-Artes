import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValuelogocreateComponent } from './valuelogocreate.component';

describe('ValuelogocreateComponent', () => {
  let component: ValuelogocreateComponent;
  let fixture: ComponentFixture<ValuelogocreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValuelogocreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValuelogocreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
