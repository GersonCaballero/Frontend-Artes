import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FontcreateComponent } from './fontcreate.component';

describe('FontcreateComponent', () => {
  let component: FontcreateComponent;
  let fixture: ComponentFixture<FontcreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FontcreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FontcreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
