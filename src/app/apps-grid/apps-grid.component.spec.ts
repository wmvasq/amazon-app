import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppsGridComponent } from './apps-grid.component';

describe('AppsGridComponent', () => {
  let component: AppsGridComponent;
  let fixture: ComponentFixture<AppsGridComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppsGridComponent]
    });
    fixture = TestBed.createComponent(AppsGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
