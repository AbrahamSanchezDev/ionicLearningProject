import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApitesterPage } from './apitester.page';

describe('ApitesterPage', () => {
  let component: ApitesterPage;
  let fixture: ComponentFixture<ApitesterPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ApitesterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
