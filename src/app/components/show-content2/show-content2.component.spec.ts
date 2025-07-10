import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowContent2Component } from './show-content2.component';

describe('ShowContent2Component', () => {
  let component: ShowContent2Component;
  let fixture: ComponentFixture<ShowContent2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowContent2Component]
    });
    fixture = TestBed.createComponent(ShowContent2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
