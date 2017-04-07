import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RVidiNagruzkiComponent } from './r-vidi-nagruzki.component';

describe('RVidiNagruzkiComponent', () => {
  let component: RVidiNagruzkiComponent;
  let fixture: ComponentFixture<RVidiNagruzkiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RVidiNagruzkiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RVidiNagruzkiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
