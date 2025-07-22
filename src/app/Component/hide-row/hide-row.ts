import { LoanService } from './../../Service/loan-service';
import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import Swal from 'sweetalert2';
interface color {
  color: string;
  text: string;
  clas?: string;
}
@Component({
  selector: 'app-hide-row',
  imports: [CommonModule, RouterLink],
  templateUrl: './hide-row.html',
  styleUrl: './hide-row.css',
})
export class HideRow {
  username: string = '';
  selectedBtn: string = 'home';
  constructor(private LoanService: LoanService) {}
  isActive = true;
  isdark = true;
  isAc = true;
  AdminCatch: string = '';
  PasswordAdmin: string = '';
  ad = inject(LoanService);
  navigatepage = inject(Router);

  theme = signal<'wrapper-dash' | 'activeDark'>('wrapper-dash');
  iconTheme = signal<'fa-solid fa-moon' | 'fa-solid fa-circle-half-stroke'>(
    'fa-solid fa-moon'
  );
  toggleTheme() {
    this.theme.update((current) =>
      current == 'wrapper-dash' ? 'activeDark' : 'wrapper-dash'
    );
    this.iconTheme.update((crr) =>
      crr == 'fa-solid fa-moon'
        ? 'fa-solid fa-circle-half-stroke'
        : 'fa-solid fa-moon'
    );
  }
  currentLanguage: 'en' | 'km' = 'en';
  getcolor(): color[] {
    const textMap = {
      en: ['Loan', 'Loan2', 'Loan3', 'DesLoan', 'DesLoan2', 'DesLoan3'],
      km: [
        'ប្រាក់កម្ចី',
        'ប្រាក់កម្ចីថយការប្រាក់',
        'ប្រាក់កម្ចីថយការប្រាក់បីខែ',
        'ការពិពណ៌នាប្រាក់កម្ចី',
        'ការពិពណ៌នាប្រាក់កម្ចី1',
        'ការពិពណ៌នាប្រាក់កម្ចី2',
      ],
    };

    const classMap = [
      'fa-solid fa-money-check-dollar',
      'fa-solid fa-money-bill-transfer',
      'fa-solid fa-money-bill-trend-up',
      'fa-solid fa-list-check',
      'fa-solid fa-calendar-days',
      'fa-solid fa-landmark',
    ];

    return textMap[this.currentLanguage].map((text, index) => ({
      color: [
        '#2f6397ff',
        '#34495e',
        '#2f6397ff',
        '#34495e',
        '#2f6397ff',
        '#34495e',
      ][index],
      text,
      clas: classMap[index],
    }));
  }

  setBtn(btnName: string) {
    this.selectedBtn = btnName;
  }
  RowColor(): color[] {
    const textMap = {
      en: ['Members', 'LogOut'],
      km: ['គណនី', 'ចាកចេញ'],
    };

    const classMap = ['fa-solid fa-people-group', 'fa-solid fa-user-tie'];

    return textMap[this.currentLanguage].map((text, index) => ({
      color: ['#2f6397ff', '#34495e'][index],
      text,
      clas: classMap[index],
    }));
  }
  NameChange() {
    const NameChnage = {
      en: 'Bun Sengtri',
      km: 'ប៊ុន សេងទ្រី',
    };
    return NameChnage[this.currentLanguage];
  }
  AdminChange() {
    const adminName = {
      en: (this.AdminCatch = this.LoanService.getUserName()),
      km: 'អ្នក​គ្រប់គ្រង',
    };
    return adminName[this.currentLanguage];
  }
  idChange() {
    const idChnage = {
      en: ['Id:', (this.PasswordAdmin = this.LoanService.getPassword())],
      km: ['លេខសម្គាល់:', '៩៩៩៩'],
    };
    return idChnage[this.currentLanguage]
      .map((id) => {
        return id;
      })
      .join(' ');
  }
  hideNav() {
    return {
      navbarClass: this.isActive ? 'wrappernavbar' : 'active',
      iconClass: this.isAc ? 'fa-solid fa-bars' : 'fa-solid fa-xmark',
    };
  }
  clickNav() {
    this.isActive = !this.isActive;
    this.isAc = !this.isAc;
  }

  // CongrateData() {
  //   return setTimeout(() => {
  //     Swal.fire({
  //       title: 'welcome: ' + (this.AdminCatch = this.LoanService.getUserName()),
  //       icon: 'success',
  //       draggable: true,
  //     });
  //   }, 1000);
  // }
  Loout() {
    this.navigatepage.navigate(['/aba']);
  }
  NavigatePage(text: string) {
    const routeMap: Record<string, string> = {
      Loan: '/Loan',
      Loan2: '/Loan2',
      Loan3: '/Loan3',
      DesLoan: '/DesLoan',
      DesLoan2: '/DesLoan2',
      DesLoan3: '/DesLoan3',
      Members: '/Members',
      LogOut: '/aba',
      ប្រាក់កម្ចី: '/Loan',
      ប្រាក់កម្ចីថយការប្រាក់: '/Loan2',
      ប្រាក់កម្ចីថយការប្រាក់បីខែ: '/Loan3',
      ការពិពណ៌នាប្រាក់កម្ចី: '/DesLoan',
      ការពិពណ៌នាប្រាក់កម្ចី1: '/DesLoan2',
      ការពិពណ៌នាប្រាក់កម្ចី2: '/DesLoan3',
    };

    const route = routeMap[text];
    if (route) {
      this.navigatepage.navigate([route]);
    } else {
      Swal.fire({
        title: 'Page Not Found',
        icon: 'error',
        draggable: false,
      });
    }
  }
  KhmerLanguaue() {
    if (this.currentLanguage === 'en') {
      this.currentLanguage = 'km';
      Swal.fire({
        title: 'Khmer Language',
        icon: 'success',
        draggable: true,
      });
    } else {
      this.currentLanguage = 'en';
      Swal.fire({
        title: 'English Language',
        icon: 'success',
        draggable: true,
      });
    }
  }
  // ngOnInit(): void {
  //   this.CongrateData();
  // }
}
