import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoeslistComponent } from './logoeslist.component';

describe('LogoeslistComponent', () => {
  let component: LogoeslistComponent;
  let fixture: ComponentFixture<LogoeslistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogoeslistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoeslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
