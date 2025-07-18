import { LoanService } from './../../Service/loan-service';
import { CommonModule } from '@angular/common';
import { Component, signal, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-passwor-deigits',
  imports: [CommonModule],
  templateUrl: './passwor-deigits.html',
  styleUrl: './passwor-deigits.css',
})
export class PassworDeigits {
  constructor(private LoanService: LoanService, private Router: Router) {}
  Rou = inject(Router);
  maxLenght: number = 6;
  code: string[] = Array(this.maxLenght).fill('');
  currentIndex: number = 0;
  key: string[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
  phone: string = '099706869';
  text: string = 'សូមបញ្ចូលលេខសម្ងាត់';
  passwors: string = 'ភ្លេចពាក្យសម្ងាត់';
  Cancel = signal('ប៉ោះបង់');
  detected = signal('');
  Admin = signal('User');
  DetectedAwait = signal(true);
  showError = false;
  username: string = 'Admin';
  password: string = '';

  get Circile() {
    return Array(this.maxLenght);
  }

  enterDigits(de: string): void {
    if (this.currentIndex < this.maxLenght) {
      this.code[this.currentIndex] = de;
      this.currentIndex++;
    }
    if (this.currentIndex == this.maxLenght) {
      setTimeout(() => {
        this.VerifyCode();
      }, 0);
    }
    this.Cancel.set('លុប');

    console.log(this.code);
    console.log(this.currentIndex);
  }
  triggerError() {
    setTimeout(() => {
      this.showError = true;
    }, 100);
  }
  VerifyCode(): void {
    let EnterCode = this.code.join('');
    this.password = EnterCode;
    if (this.password === '999999') {
      this.Admin.set('Admin');
      this.DetectedAwait.set(false);
      this.AwaitLoading();
    } else {
      this.detected.set('សូមបញ្ចូលលេខPINអោយបានត្រឹមត្រូវ');
      this.triggerError();
      setTimeout(() => {
        this.Clear();
      }, 100);
    }
    console.log(this.password);
  }

  login() {
    this.LoanService.setUserName(this.username, this.password);
    // this.Rou.navigate(['/dashboard']);
    this.Router.navigate(['/dashboard']);
  }

  Clear() {
    this.code = Array(this.maxLenght).fill('');
    this.currentIndex = 0;
    this.Cancel.set('ប៉ោះបង់');
  }
  delete() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.code[this.currentIndex] = '';
    }
    if (this.currentIndex == 0) {
      this.Cancel.set('ប៉ោះបង់');
    }
    console.log(this.currentIndex);
  }
  CheckClass() {
    return this.DetectedAwait() ? 'loading' : 'active';
  }
  AwaitLoading() {
    setTimeout(() => {
      this.DetectedAwait.set(false);
      this.CheckClass();
      this.login();
    }, 2000);
  }
}
