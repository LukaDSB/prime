import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowContent1Component } from './show-content1.component';

describe('ShowContent1Component', () => {
  let component: ShowContent1Component;
  let fixture: ComponentFixture<ShowContent1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowContent1Component]
    });
    fixture = TestBed.createComponent(ShowContent1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
