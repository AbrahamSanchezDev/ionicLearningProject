import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SimpleAlgorithmsPage } from './simple-algorithms.page';

describe('SimpleAlgorithmsPage', () => {
  let component: SimpleAlgorithmsPage;
  let fixture: ComponentFixture<SimpleAlgorithmsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SimpleAlgorithmsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
