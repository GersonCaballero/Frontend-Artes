import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsertypeeditComponent } from './usertypeedit.component';

describe('UsertypeeditComponent', () => {
  let component: UsertypeeditComponent;
  let fixture: ComponentFixture<UsertypeeditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsertypeeditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsertypeeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
