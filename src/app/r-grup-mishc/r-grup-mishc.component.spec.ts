import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RGrupMishcComponent } from './r-grup-mishc.component';

describe('RGrupMishcComponent', () => {
  let component: RGrupMishcComponent;
  let fixture: ComponentFixture<RGrupMishcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RGrupMishcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RGrupMishcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
