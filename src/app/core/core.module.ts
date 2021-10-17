import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MortgageCalculatorService } from './services/mortgage-calculator.service';
import { MortgageAdapter } from './models/mortgage';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule
  ],
  providers: [
    // services
    MortgageCalculatorService,
    // adapters
    MortgageAdapter
  ]
})
export class CoreModule { }
