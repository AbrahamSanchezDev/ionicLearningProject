import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgendaDeContactosPage } from './agenda-de-contactos.page';

describe('AgendaDeContactosPage', () => {
  let component: AgendaDeContactosPage;
  let fixture: ComponentFixture<AgendaDeContactosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AgendaDeContactosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
