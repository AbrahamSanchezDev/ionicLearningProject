import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConvertidorDeMonedasPage } from './convertidor-de-monedas.page';

describe('ConvertidorDeMonedasPage', () => {
  let component: ConvertidorDeMonedasPage;
  let fixture: ComponentFixture<ConvertidorDeMonedasPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ConvertidorDeMonedasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
