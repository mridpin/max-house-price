import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {

  income!: number;
  ipa!: number;
  years!: number;
  monthlyPayment: number;
  maxHousePrice: number;

  constructor() { 
    this.monthlyPayment = 0.0;
    this.maxHousePrice = 0.0;
  }

  ngOnInit(): void {
  }

  calculateMortgage(): void {
    console.log(this.income);
    console.log(this.ipa);
    console.log(this.years);
  }

}
