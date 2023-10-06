import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartUsageComponent } from './chart-usage.component';

describe('ChartUsageComponent', () => {
  let component: ChartUsageComponent;
  let fixture: ComponentFixture<ChartUsageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChartUsageComponent]
    });
    fixture = TestBed.createComponent(ChartUsageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
