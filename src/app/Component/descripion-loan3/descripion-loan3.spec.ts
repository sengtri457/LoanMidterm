import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescripionLoan3 } from './descripion-loan3';

describe('DescripionLoan3', () => {
  let component: DescripionLoan3;
  let fixture: ComponentFixture<DescripionLoan3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DescripionLoan3]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DescripionLoan3);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
