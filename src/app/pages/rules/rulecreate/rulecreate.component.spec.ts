import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RulecreateComponent } from './rulecreate.component';

describe('RulecreateComponent', () => {
  let component: RulecreateComponent;
  let fixture: ComponentFixture<RulecreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RulecreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RulecreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
