import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RChasteiTelaComponent } from './r-chastei-tela.component';

describe('RChasteiTelaComponent', () => {
  let component: RChasteiTelaComponent;
  let fixture: ComponentFixture<RChasteiTelaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RChasteiTelaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RChasteiTelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
