import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsertypecreateComponent } from './usertypecreate.component';

describe('UsertypecreateComponent', () => {
  let component: UsertypecreateComponent;
  let fixture: ComponentFixture<UsertypecreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsertypecreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsertypecreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
