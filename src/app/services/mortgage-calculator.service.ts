import { Injectable } from '@angular/core';
import { Mortgage } from '../models/mortgage';

@Injectable({
  providedIn: 'root'
})
export class MortgageCalculatorService {

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
    mortgage.maxHousePrice = mortgage.principal / 0.8;
    return mortgage;
  }

  constructor() { }
}
