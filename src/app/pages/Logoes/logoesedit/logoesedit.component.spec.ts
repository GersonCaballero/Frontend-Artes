import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoeseditComponent } from './logoesedit.component';

describe('LogoeseditComponent', () => {
  let component: LogoeseditComponent;
  let fixture: ComponentFixture<LogoeseditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogoeseditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoeseditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
