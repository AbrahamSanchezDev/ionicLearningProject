import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminRespuestasPage } from './admin-respuestas.page';

describe('AdminRespuestasPage', () => {
  let component: AdminRespuestasPage;
  let fixture: ComponentFixture<AdminRespuestasPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AdminRespuestasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
