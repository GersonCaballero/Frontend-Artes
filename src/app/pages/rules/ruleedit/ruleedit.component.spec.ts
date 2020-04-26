import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RuleeditComponent } from './ruleedit.component';

describe('RuleeditComponent', () => {
  let component: RuleeditComponent;
  let fixture: ComponentFixture<RuleeditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RuleeditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RuleeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
