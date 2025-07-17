import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
interface LoanEntry {
  no: number;
  principal: number;
  interest: number;
  total: number;
  paymentDate: string;
}
@Component({
  selector: 'app-loan',
  imports: [CommonModule, FormsModule],
  templateUrl: './loan.html',
  styleUrl: './loan.css',
})
export class Loan implements OnInit {
  // Inputs from user
  priceInput: string = '2000';
  interestInput: string = '2';
  selectedDuration: number = 10;

  // Calculated values
  price: number = 2000;
  interestRate: number = 2;
  duration: number = 10;

  principal: number = 0;
  interest: number = 0;
  total: number = 0;

  paymentDates: string[] = [];
  currentDate = '2023-05-08';
  loanList: LoanEntry[] = [];

  ngOnInit(): void {
    this.generatePaymentDates();
    this.calculateLoan();
  }

  calculateLoan(): void {
    const inputPrice = parseFloat(this.priceInput);
    const inputInterest = parseFloat(this.interestInput);

    if (inputPrice <= 0) {
      Swal.fire({
        title: 'Please input amount > 0!',
        icon: 'error',
      });
      return;
    }
    if (inputInterest <= 0) {
      Swal.fire({
        title: 'Please input interest > 0!',
        icon: 'error',
      });
      return;
    }

    this.price = inputPrice;
    this.interestRate = isNaN(inputInterest)
      ? this.interestRate
      : inputInterest;
    this.duration = this.selectedDuration;

    this.interest = (this.price * this.interestRate) / 100;
    this.principal = this.price / this.duration;
    this.total = this.principal + this.interest;

    this.generatePaymentDates();
    this.generateLoanList();
    if (this.priceInput !== '2000') {
      Swal.fire({
        title: 'Updated Successfully!',
        icon: 'success',
      });
    }
  }

  generatePaymentDates(): void {
    this.paymentDates = [];
    for (let i = 0; i < this.duration; i++) {
      const date = new Date(this.currentDate);
      date.setMonth(date.getMonth() + i);
      this.paymentDates.push(date.toISOString().split('T')[0]);
    }
  }

  generateLoanList(): void {
    this.loanList = [];
    for (let i = 0; i < this.duration; i++) {
      this.loanList.push({
        no: i + 1,
        principal: this.principal,
        interest: this.interest,
        total: this.total,
        paymentDate: this.paymentDates[i],
      });
    }
  }

  get totalInterest(): number {
    return this.interest * this.duration;
  }

  get grandTotal(): number {
    return this.total * this.duration;
  }
}
