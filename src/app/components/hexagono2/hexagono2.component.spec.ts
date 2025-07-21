import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hexagono2Component } from './hexagono2.component';

describe('Hexagono2Component', () => {
  let component: Hexagono2Component;
  let fixture: ComponentFixture<Hexagono2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Hexagono2Component]
    });
    fixture = TestBed.createComponent(Hexagono2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
