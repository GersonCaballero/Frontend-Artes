import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FonteditComponent } from './fontedit.component';

describe('FonteditComponent', () => {
  let component: FonteditComponent;
  let fixture: ComponentFixture<FonteditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FonteditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FonteditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
