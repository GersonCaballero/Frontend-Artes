import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtscreateComponent } from './artscreate.component';

describe('ArtscreateComponent', () => {
  let component: ArtscreateComponent;
  let fixture: ComponentFixture<ArtscreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtscreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtscreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
