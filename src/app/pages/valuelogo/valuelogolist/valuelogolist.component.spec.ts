import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValuelogolistComponent } from './valuelogolist.component';

describe('ValuelogolistComponent', () => {
  let component: ValuelogolistComponent;
  let fixture: ComponentFixture<ValuelogolistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValuelogolistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValuelogolistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
