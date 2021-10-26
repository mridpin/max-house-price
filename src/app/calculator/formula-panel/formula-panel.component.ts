import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Mortgage } from 'src/app/core/models/mortgage';
import { MortgageCalculatorService } from 'src/app/core/services/mortgage-calculator.service';

@Component({
  selector: 'app-formula-panel',
  templateUrl: './formula-panel.component.html',
  styleUrls: ['./formula-panel.component.scss']
})
export class FormulaPanelComponent implements OnInit {

  @Output() event = new EventEmitter<boolean>();

  mortgage!: Mortgage;

  constructor(private mortgageCalc: MortgageCalculatorService) {
    this.mortgageCalc.mortgage.subscribe((mortgage: Mortgage) => {
      this.mortgage = mortgage;
    });
  }

  ngOnInit(): void {
  }

  closeModal(): void {
    this.event.emit(false);
  }

}
