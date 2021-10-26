import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Mortgage } from '../models/mortgage';

@Injectable()
export class MortgageCalculatorService {

  $mortgage: Subject<Mortgage>;

  constructor() {
    this.$mortgage = new Subject();
  }

  get mortgage(): Observable<Mortgage> {
    return this.$mortgage.asObservable();
  }

  calculateMonthlyPayment(income: number, percentIncome: number): number {
    return income * percentIncome;
  }

  calculateMaxPrincipal(mortgage: Mortgage): Mortgage {
    const ipa: number = mortgage.interestRate;
    const n: number = mortgage.years * 12;
    const q: number = mortgage.monthlyPayment;

    // amortizacion frances
    const i = ipa / 12 / 100;
    const denom = ((1 + i) ** -n);
    const a = (1 - denom) / i;
    const p = q * a;

    mortgage.principal = p;
    mortgage.maxHousePrice = mortgage.principal / mortgage.percent;
    this.$mortgage.next(mortgage);
    return mortgage;
  }
}
