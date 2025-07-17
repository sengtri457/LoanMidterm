import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoanThreeMonth } from './Component/loan-three-month/loan-three-month';
import { Loan2 } from './Component/loan2/loan2';
import { Loan } from './Component/loan/loan';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LoanThreeMonth, Loan2, Loan],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'LoanMidterm';
}
