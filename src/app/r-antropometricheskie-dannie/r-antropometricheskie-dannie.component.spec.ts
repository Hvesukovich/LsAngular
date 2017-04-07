import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RAntropometricheskieDannieComponent } from './r-antropometricheskie-dannie.component';

describe('RAntropometricheskieDannieComponent', () => {
  let component: RAntropometricheskieDannieComponent;
  let fixture: ComponentFixture<RAntropometricheskieDannieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RAntropometricheskieDannieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RAntropometricheskieDannieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
