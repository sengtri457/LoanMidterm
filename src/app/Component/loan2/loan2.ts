import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-loan2',
  imports: [FormsModule, CommonModule],
  templateUrl: './loan2.html',
  styleUrl: './loan2.css',
})
export class Loan2 implements OnInit {
  principal = 2000;
  interestRate = 2;
  duration = 10;
  startDate = '2023-01-01'; // YYYY-MM-DD
  catchValueForm: string = '';
  priceInput: string = '2000';
  interestInput: string = '2';
  selectedDuration: number = 10;

  payments: any[] = [];

  calculatePayments() {
    this.payments = [];
    const inputPrice = parseFloat(this.priceInput);
    const inputInterest = parseFloat(this.interestInput);
    this.principal = inputPrice;
    this.interestRate = inputInterest;
    const monthlyPrincipal = this.principal / this.duration;
    const baseDate = new Date(this.startDate);
    console.log(this.principal, inputPrice);
    for (let i = 1; i <= this.duration; i++) {
      const paymentDate = new Date(baseDate);
      paymentDate.setMonth(baseDate.getMonth() + i);

      const remaining = this.principal - monthlyPrincipal * (i - 1);
      const interest = +((remaining * this.interestRate) / 100).toFixed(2);
      const total = +(monthlyPrincipal + interest).toFixed(2);

      this.payments.push({
        no: i,
        date: paymentDate.toISOString(),
        principal: +monthlyPrincipal.toFixed(2),
        interest,
        total,
        isOddRow: i % 2 === 1,
      });
    }
  }

  get totalInterest() {
    return this.payments.reduce((sum, p) => sum + p.interest, 0);
  }

  get totalPayment() {
    return this.payments.reduce((sum, p) => sum + p.total, 0);
  }
  checkSucessfull() {
    let numericValuePrice = parseFloat(this.catchValueForm) || 2000;
    numericValuePrice = this.principal;
    console.log(numericValuePrice);

    if (numericValuePrice !== 2000) {
      Swal.fire({
        title: 'Change Payment Sucessfully!!!',
        showClass: {
          popup: `
          animate__animated
          animate__fadeInUp
          animate__faster
          animate__rubberBand
        `,
        },
        hideClass: {
          popup: `
          animate__animated
          animate__fadeOutDown
          animate__faster
        `,
        },
      });
    } else {
      Swal.fire({
        title: 'Value Stay On Recent!!!',
        showClass: {
          popup: `
          animate__animated
          animate__fadeInUp
          animate__faster
          animate__rubberBand
        `,
        },
        hideClass: {
          popup: `
          animate__animated
          animate__fadeOutDown
          animate__faster
        `,
        },
      });
    }
  }
  ngOnInit(): void {
    this.calculatePayments();
  }
}
