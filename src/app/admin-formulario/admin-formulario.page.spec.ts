import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminFormularioPage } from './admin-formulario.page';

describe('AdminFormularioPage', () => {
  let component: AdminFormularioPage;
  let fixture: ComponentFixture<AdminFormularioPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AdminFormularioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
