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
  monthlyPayment: number;
  maxHousePrice: number;

  canSend: boolean = false;

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
    this.monthlyPayment = this.mortgageCalc.calculateMonthlyPayment(parseFloat(this.income), 0.3);
    const mortgage: Mortgage = this.adapter.adapt({
      interestRate: this.ipa,
      years: this.years,
      type: InterestType.fixed,
      percent: 0.8,
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
  }

  checkSend(): void {
    if (this.years && this.income && this.ipa) {
      this.canSend = true;
    }
  }
}
