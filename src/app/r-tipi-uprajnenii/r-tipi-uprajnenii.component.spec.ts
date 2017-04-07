import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RTipiUprajneniiComponent } from './r-tipi-uprajnenii.component';

describe('RTipiUprajneniiComponent', () => {
  let component: RTipiUprajneniiComponent;
  let fixture: ComponentFixture<RTipiUprajneniiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RTipiUprajneniiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RTipiUprajneniiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
