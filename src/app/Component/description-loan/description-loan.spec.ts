import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptionLoan } from './description-loan';

describe('DescriptionLoan', () => {
  let component: DescriptionLoan;
  let fixture: ComponentFixture<DescriptionLoan>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DescriptionLoan]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DescriptionLoan);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
