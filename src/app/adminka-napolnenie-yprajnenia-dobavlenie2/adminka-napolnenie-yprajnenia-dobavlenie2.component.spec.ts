import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminkaNapolnenieYprajneniaDobavlenie2Component } from './adminka-napolnenie-yprajnenia-dobavlenie2.component';

describe('AdminkaNapolnenieYprajneniaDobavlenie2Component', () => {
  let component: AdminkaNapolnenieYprajneniaDobavlenie2Component;
  let fixture: ComponentFixture<AdminkaNapolnenieYprajneniaDobavlenie2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminkaNapolnenieYprajneniaDobavlenie2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminkaNapolnenieYprajneniaDobavlenie2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
