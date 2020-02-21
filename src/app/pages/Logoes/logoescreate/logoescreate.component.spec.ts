import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoescreateComponent } from './logoescreate.component';

describe('LogoescreateComponent', () => {
  let component: LogoescreateComponent;
  let fixture: ComponentFixture<LogoescreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogoescreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoescreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
