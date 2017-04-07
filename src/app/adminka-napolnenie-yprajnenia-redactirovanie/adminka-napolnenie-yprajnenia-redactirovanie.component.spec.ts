import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminkaNapolnenieYprajneniaRedactirovanieComponent } from './adminka-napolnenie-yprajnenia-redactirovanie.component';

describe('AdminkaNapolnenieYprajneniaRedactirovanieComponent', () => {
  let component: AdminkaNapolnenieYprajneniaRedactirovanieComponent;
  let fixture: ComponentFixture<AdminkaNapolnenieYprajneniaRedactirovanieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminkaNapolnenieYprajneniaRedactirovanieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminkaNapolnenieYprajneniaRedactirovanieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
