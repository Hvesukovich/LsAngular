import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RMishciComponent } from './r-mishci.component';

describe('RMishciComponent', () => {
  let component: RMishciComponent;
  let fixture: ComponentFixture<RMishciComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RMishciComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RMishciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
