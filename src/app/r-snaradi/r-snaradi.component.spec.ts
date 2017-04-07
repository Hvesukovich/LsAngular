import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RSnaradiComponent } from './r-snaradi.component';

describe('RSnaradiComponent', () => {
  let component: RSnaradiComponent;
  let fixture: ComponentFixture<RSnaradiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RSnaradiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RSnaradiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
