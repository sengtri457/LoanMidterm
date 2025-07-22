import { Component } from '@angular/core';

interface infromationMember {
  name: string;
  title: string;
  emId: string;
  department: string;
  exp: string;
  satus: string;
  specialization: string;
  specialization2: string;
  statNumber: number;
  statTitle: string;
  statNumber2: number;
  statTitle2: string;
  img: string;
}

@Component({
  selector: 'app-members',
  imports: [],
  templateUrl: './members.html',
  styleUrl: './members.css',
})
export class Members {
  infromationWorker(): infromationMember[] {
    const row: infromationMember[] = [];
    row.push(
      {
        name: 'Bun Sengtri',
        title: 'Senior Loan Manager',
        emId: 'LM001',
        department: 'Loan Operations',
        exp: '8years',
        satus: 'Active',
        specialization: 'Team Leadership',
        specialization2: 'Personal Loans',
        statNumber: 247,
        statTitle: 'Loans Processed',
        statNumber2: 98,
        statTitle2: 'Approval Rate',
        img: '/pic/PortfolioPic.jpg',
      },
      {
        name: 'Vat Phirun',
        title: 'Loan Officer',
        emId: 'LO002',
        department: 'Credit Assessment',
        exp: '8 years',
        satus: 'Active',
        specialization: 'Team Leadership',
        specialization2: 'Personal Loans',
        statNumber: 247,
        statTitle: 'Loans Processed',
        statNumber2: 98,
        statTitle2: 'Approval Rate',
        img: '/pic/phirun.jpg',
      },
      {
        name: 'Em Raksa',
        title: 'Senior Underwriter',
        emId: 'LO002',
        department: 'Underwriting',
        exp: '7 years',
        satus: 'Available',
        specialization: 'Mortgage Loans',
        specialization2: 'Policy Compliance',
        statNumber: 156,
        statTitle: 'Cases Underwrote',
        statNumber2: 96,
        statTitle2: 'Decision Accuracy',
        img: '/pic/raksa.jpg',
      },
      {
        name: 'Chem SeaFong',
        title: 'Collections Specialist',
        emId: 'CS004',
        department: 'Collections',
        exp: '4 years',
        satus: 'Active',
        specialization: 'Debt Recovery',
        specialization2: 'Customer Relations',
        statNumber: 132,
        statTitle: 'Cases Resolved',
        statNumber2: 87,
        statTitle2: 'Recovery Rate',
        img: '/pic/fong.jpg',
      },
      {
        name: 'Sombo Tithmony',
        title: 'Loan Processor',
        emId: 'LP005',
        department: 'Loan Processing',
        exp: '3 years',
        satus: 'Processing',
        specialization: 'Documentation',
        specialization2: 'Compliance Check',
        statNumber: 203,
        statTitle: 'Documents',
        statNumber2: 92,
        statTitle2: 'Processing Speed',
        img: '/pic/mony.jpg',
      }
    );
    return row;
  }
}
