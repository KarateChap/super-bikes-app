export interface Billing {
  loanId: string;
  dueDate: Date;
  paymentDate: Date;
  installment: number;
  payment: number;
  interest: number;
  penalty: number;
  total: number;
}
