import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtseditComponent } from './artsedit.component';

describe('ArtseditComponent', () => {
  let component: ArtseditComponent;
  let fixture: ComponentFixture<ArtseditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtseditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtseditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
