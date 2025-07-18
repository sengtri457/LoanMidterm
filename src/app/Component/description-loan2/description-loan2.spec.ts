import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptionLoan2 } from './description-loan2';

describe('DescriptionLoan2', () => {
  let component: DescriptionLoan2;
  let fixture: ComponentFixture<DescriptionLoan2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DescriptionLoan2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DescriptionLoan2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
