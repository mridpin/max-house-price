import { Component, OnInit } from '@angular/core';
import { InterestType, Mortgage, MortgageAdapter } from '../core/models/mortgage';
import { MortgageCalculatorService } from '../core/services/mortgage-calculator.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {

  income!: string;
  ipa!: string;
  years!: string;
  debtPercent = '30';
  financePercent = '80';
  monthlyPayment: number;
  maxHousePrice: number;

  showExtras = false;
  isInfo = false;
  isFormula = false;
  canSend = false;

  mortgage!: Mortgage;

  get debtFloat(): number {
    return parseFloat(this.debtPercent);
  }

  get financeFloat(): number {
    return parseFloat(this.financePercent);
  }

  get yearsFloat(): number {
    return parseFloat(this.years);
  }

  constructor(
    private mortgageCalc: MortgageCalculatorService,
    private adapter: MortgageAdapter
  ) {
    this.monthlyPayment = 0.0;
    this.maxHousePrice = 0.0;
    this.mortgageCalc.mortgage.subscribe((mortgage: Mortgage) => {
      this.mortgage = mortgage;
    });
  }

  ngOnInit(): void {
  }

  submitMortgage(): void {
    this.monthlyPayment = this.mortgageCalc.calculateMonthlyPayment(parseFloat(this.income), parseFloat(this.debtPercent) / 100);
    this.calculateMortgage();
  }

  calculateMortgage(): void {
    const mortgage: Mortgage = this.adapter.adapt({
      interestRate: this.ipa,
      years: this.years,
      type: InterestType.fixed,
      percent: parseFloat(this.financePercent) / 100,
      monthlyPayment: this.monthlyPayment,
    });
    this.maxHousePrice = this.mortgageCalc.calculateMaxPrincipal(mortgage).maxHousePrice;
    mortgage.maxHousePrice = this.maxHousePrice;
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

  toggleFormula($event: boolean): void {
    this.isFormula = $event;
  }
}
