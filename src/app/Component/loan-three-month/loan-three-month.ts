import { CommonModule, CurrencyPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
import 'animate.css';
import { RouterLink } from '@angular/router';
interface LoanPayment {
  no: number;
  principal: number;
  interest: number;
  total: number;
  payDate: string;
  isOddRow: boolean;
}

@Component({
  selector: 'app-loan-three-month',
  imports: [FormsModule, CurrencyPipe, CommonModule, RouterLink],
  templateUrl: './loan-three-month.html',
  styleUrl: './loan-three-month.css',
})
export class LoanThreeMonth implements OnInit {
  price: number = 2000;
  duration: number = 10;
  interestRate: number = 2;
  interestShow: number = 0;
  startDate: string = '2023-01-01';

  priceInput: string = '2000';
  interestInput: string = '2';
  selectedDuration: number = 10;

  //check Sucess
  catchValueForm: string = '';

  payments: LoanPayment[] = [];
  totalInterest: number = 0;
  totalAmountPaid: number = 0;

  ngOnInit() {
    this.calculatePayments();
  }
  calculatePayments() {
    const baseDate = new Date(this.startDate);
    if (!this.price || !this.duration) {
      this.payments = [];
      return;
    }
    const priceForm = parseFloat(this.priceInput);
    const interestForm = parseFloat(this.interestInput);
    this.price = priceForm;
    this.interestRate = interestForm;
    this.duration = this.selectedDuration;
    const priceCal = priceForm;
    const duration = this.duration;
    const interestRate = interestForm;
    const interestShow = interestRate / 100;

    this.payments = [];
    this.totalInterest = 0;
    this.totalAmountPaid = 0;
    console.log(priceForm);
    let pricePaid = 0;

    for (let i = 1; i <= duration; i++) {
      let principalPayment = priceCal / duration; // Base principal payment
      const paymentDate = new Date(baseDate);
      paymentDate.setMonth(baseDate.getMonth() + i);

      // Increase principal payment by 3 times if it's a 3rd payment
      if (i % 3 === 0) {
        principalPayment *= 3;
      }

      // Calculate interest on remaining balance
      let interestPaid = (priceCal - pricePaid) * interestShow;
      let principalPaid = 0;

      // Pay principal dynamically every 3rd payment or the last payment
      if (i % 3 === 0 || i == duration) {
        if (pricePaid + principalPayment <= priceCal) {
          principalPaid = principalPayment; // Pay the calculated principal
        } else {
          principalPaid = priceCal - pricePaid; // Pay the remaining principal in last payment
        }
      }

      pricePaid += principalPaid;
      console.log(pricePaid, principalPaid);
      this.totalAmountPaid =
        this.totalAmountPaid + principalPaid + interestPaid;
      this.totalInterest = this.totalInterest + interestPaid;

      this.payments.push({
        no: i,
        principal: principalPaid,
        interest: interestPaid,
        total: principalPaid + interestPaid,
        payDate: paymentDate.toISOString(),
        isOddRow: i % 2 === 1,
      });
    }
  }

  checkSucessfull() {
    let numericValuePrice = parseFloat(this.catchValueForm);
    numericValuePrice = this.price;

    if (numericValuePrice == this.price) {
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
}
