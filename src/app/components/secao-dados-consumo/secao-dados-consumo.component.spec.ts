import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecaoDadosConsumoComponent } from './secao-dados-consumo.component';

describe('SecaoDadosConsumoComponent', () => {
  let component: SecaoDadosConsumoComponent;
  let fixture: ComponentFixture<SecaoDadosConsumoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SecaoDadosConsumoComponent]
    });
    fixture = TestBed.createComponent(SecaoDadosConsumoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
