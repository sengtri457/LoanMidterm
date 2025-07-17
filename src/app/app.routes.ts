import { Routes } from '@angular/router';
import { Loan } from './Component/loan/loan';
import { PassworDeigits } from './Component/passwor-deigits/passwor-deigits';
import { HideRow } from './Component/hide-row/hide-row';
import { PageError } from './Component/page-error/page-error';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'aba',
  },
  {
    path: 'LoanSystem',
    component: Loan,
  },
  {
    path: 'aba',
    component: PassworDeigits,
  },
  {
    path: 'dashboard',
    component: HideRow,
  },
  {
    path: '**',
    component: PageError,
  },
];
