import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Hm1Component } from './hm1.component';

describe('Hm1Component', () => {
  let component: Hm1Component;
  let fixture: ComponentFixture<Hm1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Hm1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Hm1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
