import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalvnajaAdminAkkardionComponent } from './galvnaja-admin-akkardion.component';

describe('GalvnajaAdminAkkardionComponent', () => {
  let component: GalvnajaAdminAkkardionComponent;
  let fixture: ComponentFixture<GalvnajaAdminAkkardionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalvnajaAdminAkkardionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalvnajaAdminAkkardionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
