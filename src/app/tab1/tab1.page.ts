import { Component, OnInit } from '@angular/core';
import { Billing } from '../model/billing.model';
import { LoanService } from '../services/loan.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  loanRows = [];
  tablestyle = 'bootstrap';
  columns = [{}];

  billing: Billing[] = [
    {
      loanId: '',
      dueDate: new Date(),
      paymentDate: new Date(),
      installment: 0,
      payment: 0,
      interest: 0,
      penalty: 0,
      total: 0,
    },
  ];

  constructor(private loanService: LoanService) {}

  ngOnInit(): void {
    this.billing = this.loanService.getBilling('110-0000373');
    this.loanRows = this.billing;
    // console.log(this.loanRows);
  }
}
