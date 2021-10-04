import { Component, OnInit } from '@angular/core';
import { InterestType, Mortgage, MortgageAdapter } from '../models/mortgage';
import { MortgageCalculatorService } from '../services/mortgage-calculator.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {

  income!: string;
  ipa!: string;
  years!: string;
  debtPercent: string = '30';
  financePercent: string = '80';
  monthlyPayment: number;
  maxHousePrice: number;

  showExtras: boolean = false;

  isInfo: boolean = false;
  canSend: boolean = false;

  get mortgage(): Mortgage {
    return this.mortgageCalc.mortgage;
  }

  get debtFloat(): Number {
    return parseFloat(this.debtPercent);
  }

  get financeFloat(): Number {
    return parseFloat(this.financePercent);
  }

  constructor(
    private mortgageCalc: MortgageCalculatorService,
    private adapter: MortgageAdapter
  ) {
    this.monthlyPayment = 0.0;
    this.maxHousePrice = 0.0;
  }

  ngOnInit(): void {
  }

  calculateMortgage(): void {
    this.monthlyPayment = this.mortgageCalc.calculateMonthlyPayment(parseFloat(this.income), parseFloat(this.debtPercent) / 100);
    const mortgage: Mortgage = this.adapter.adapt({
      interestRate: this.ipa,
      years: this.years,
      type: InterestType.fixed,
      percent: parseFloat(this.financePercent) / 100,
      monthlyPayment: this.monthlyPayment,
    });
    const calculatedMortgage = this.mortgageCalc.calculateMaxPrincipal(mortgage);
    this.maxHousePrice = calculatedMortgage.maxHousePrice;
  }

  clearFields(): void {
    this.income = '';
    this.ipa = '';
    this.years = '';
    this.monthlyPayment = 0;
    this.maxHousePrice = 0;
    this.canSend = false;
    this.debtPercent = '30';
    this.financePercent = '80';
  }

  checkSend(): void {
    if (this.years && this.income && this.ipa && this.debtPercent && this.financePercent) {
      this.canSend = true;
    } else {
      this.canSend = false;
    }
  }

  toggleInfo($event: boolean): void {
    this.isInfo = $event;
  }

  toggleExtras($event: boolean): void {
    this.showExtras = $event;
  }
}
