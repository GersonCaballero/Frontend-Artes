import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValuelogoeditComponent } from './valuelogoedit.component';

describe('ValuelogoeditComponent', () => {
  let component: ValuelogoeditComponent;
  let fixture: ComponentFixture<ValuelogoeditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValuelogoeditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValuelogoeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
