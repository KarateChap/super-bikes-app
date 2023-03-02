import { Component } from '@angular/core';
import { LoanProfile } from '../model/loan-profile.model';
import { LoanService } from '../services/loan.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  loanInfo: LoanProfile = {
    loanId: '',
    releaseDate: new Date(),
    customerName: '',
    loanScheme: '',
    colour: '',
    customer: '',
    frame: '',
    engineNo: '',
    loanAmount: 0,
    terms: 0,
    interestRate: 0,
    installment: 0,
    penalty: 0,
    rebate: 0,
    amountToPay: 0
  };

  constructor(private loanService: LoanService) {}

  ngOnInit(): void {
    this.loanInfo = this.loanService.getLoanProfile('110-0000373');
    console.log(this.loanInfo);
  }
}
