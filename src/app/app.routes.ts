import { Routes } from '@angular/router';
import { Loan } from './Component/loan/loan';
import { PassworDeigits } from './Component/passwor-deigits/passwor-deigits';
import { HideRow } from './Component/hide-row/hide-row';
import { PageError } from './Component/page-error/page-error';
import { Loan2 } from './Component/loan2/loan2';
import { LoanThreeMonth } from './Component/loan-three-month/loan-three-month';
import { DescriptionLoan } from './Component/description-loan/description-loan';
import { DescriptionLoan2 } from './Component/description-loan2/description-loan2';
import { DescripionLoan3 } from './Component/descripion-loan3/descripion-loan3';

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
    path: 'Loan',
    component: Loan,
  },
  {
    path: 'Loan2',
    component: Loan2,
  },
  {
    path: 'Loan3',
    component: LoanThreeMonth,
  },
  {
    path: 'DescriptionLoan',
    component: DescriptionLoan,
  },
  {
    path: 'DescriptionLoan2',
    component: DescriptionLoan2,
  },
  {
    path: 'DescriptionLoan3',
    component: DescripionLoan3,
  },
  {
    path: '**',
    component: PageError,
  },
];
