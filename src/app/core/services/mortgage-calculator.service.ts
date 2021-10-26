import { Injectable } from '@angular/core';
import { Mortgage } from '../models/mortgage';

@Injectable()
export class MortgageCalculatorService {

  private _mortgage!: Mortgage;

  public get mortgage(): Mortgage {
    return this._mortgage;
  }
  public set mortgage(value: Mortgage) {
    this._mortgage = value;
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
    return mortgage;
  }

  constructor() { }
}
