import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Hw4Component } from './hw4.component';

describe('Hw4Component', () => {
  let component: Hw4Component;
  let fixture: ComponentFixture<Hw4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Hw4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Hw4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
