import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanThreeMonth } from './loan-three-month';

describe('LoanThreeMonth', () => {
  let component: LoanThreeMonth;
  let fixture: ComponentFixture<LoanThreeMonth>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoanThreeMonth]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoanThreeMonth);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
