import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetcreateComponent } from './petcreate.component';

describe('PetcreateComponent', () => {
  let component: PetcreateComponent;
  let fixture: ComponentFixture<PetcreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetcreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetcreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
