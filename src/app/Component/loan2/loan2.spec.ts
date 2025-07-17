import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Loan2 } from './loan2';

describe('Loan2', () => {
  let component: Loan2;
  let fixture: ComponentFixture<Loan2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Loan2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Loan2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
