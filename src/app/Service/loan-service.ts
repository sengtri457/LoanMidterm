import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoanService {
  constructor() {}
  private _UserName: string = '';
  private _Password: string = '';
  setUserName(userName: string, passsword: string) {
    this._UserName = userName;
    this._Password = passsword;
    localStorage.setItem('username', userName);
    localStorage.setItem('password', passsword);
  }
  getUserName(): string {
    return this._UserName || localStorage.getItem('username') || '';
  }
  getPassword(): string {
    return this._Password || localStorage.getItem('password') || '';
  }
}
