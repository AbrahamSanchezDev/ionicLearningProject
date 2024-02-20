import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConwaygamePage } from './conwaygame.page';

describe('ConwaygamePage', () => {
  let component: ConwaygamePage;
  let fixture: ComponentFixture<ConwaygamePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ConwaygamePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
