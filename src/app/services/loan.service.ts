import { Injectable } from '@angular/core';
import { Billing } from '../model/billing.model';
import { LoanProfile } from '../model/loan-profile.model';

@Injectable({
  providedIn: 'root',
})
export class LoanService {
  loanProfile: LoanProfile[] = [
    {
      loanId: '110-0000373',
      releaseDate: new Date('2020-09-15'),
      customerName: 'ERNIE CALOTE KALAW',
      loanScheme: 'SMASH 115 SPOKE (NEW DECALS)-FW110D-G/FW110D-H',
      colour: 'Red',
      customer: 'Tarlac',
      frame: 'BE4ES-283251',
      engineNo: 'E472-685891',
      loanAmount: 53367,
      terms: 30,
      interestRate: 44.24,
      installment: 2970,
      penalty: 0,
      rebate: 200,
      amountToPay: 2770,
    },
  ];

  billing: Billing[] = [
    {
      loanId: '110-0000373',
      dueDate: new Date('2020-09-17'),
      paymentDate: new Date('2020-09-17'),
      installment: 2970,
      payment: 1002.38,
      interest: 1967.62,
      penalty: 0,
      total: 2970,
    },
    {
      loanId: '110-0000373',
      dueDate: new Date('2020-10-17'),
      paymentDate: new Date('2020-09-17'),
      installment: 2970,
      payment: 1039.34,
      interest: 1930.66,
      penalty: 420,
      total: 3390,
    },
    {
      loanId: '110-0000373',
      dueDate: new Date('2020-11-17'),
      paymentDate: new Date('2020-09-17'),
      installment: 2970,
      payment: 1077.66,
      interest: 1892.34,
      penalty: 420,
      total: 3390,
    },
    {
      loanId: '110-0000373',
      dueDate: new Date('2020-12-17'),
      paymentDate: new Date('2020-09-17'),
      installment: 2970,
      payment: 1117.39,
      interest: 1852.61,
      penalty: 274,
      total: 3244,
    },
    {
      loanId: '110-0000373',
      dueDate: new Date('2021-01-17'),
      paymentDate: new Date('2020-09-17'),
      installment: 2970,
      payment: 1002.38,
      interest: 1967.62,
      penalty: 0,
      total: 2970,
    },

    ///////////////////

    {
      loanId: '110-0000373',
      dueDate: new Date('2020-09-17'),
      paymentDate: new Date('2020-09-17'),
      installment: 2970,
      payment: 1002.38,
      interest: 1967.62,
      penalty: 0,
      total: 2970,
    },
    {
      loanId: '110-0000373',
      dueDate: new Date('2020-10-17'),
      paymentDate: new Date('2020-09-17'),
      installment: 2970,
      payment: 1039.34,
      interest: 1930.66,
      penalty: 420,
      total: 3390,
    },
    {
      loanId: '110-0000373',
      dueDate: new Date('2020-11-17'),
      paymentDate: new Date('2020-09-17'),
      installment: 2970,
      payment: 1077.66,
      interest: 1892.34,
      penalty: 420,
      total: 3390,
    },
    {
      loanId: '110-0000373',
      dueDate: new Date('2020-12-17'),
      paymentDate: new Date('2020-09-17'),
      installment: 2970,
      payment: 1117.39,
      interest: 1852.61,
      penalty: 274,
      total: 3244,
    },
    {
      loanId: '110-0000373',
      dueDate: new Date('2021-01-17'),
      paymentDate: new Date('2020-09-17'),
      installment: 2970,
      payment: 1002.38,
      interest: 1967.62,
      penalty: 0,
      total: 2970,
    },
  ];

  constructor() {}

  getAllLoanProfile() {
    return [...this.loanProfile];
  }

  getLoanProfile(loanId: string) {
    return {
      ...this.loanProfile.find((loan) => {
        return loan.loanId === loanId;
      }),
    };
  }

  getBilling(loanId: string) {
    return [
      ...this.billing.filter((billing) => {
        return billing.loanId === loanId;
      }),
    ];
  }
}
