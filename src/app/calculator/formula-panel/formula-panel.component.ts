import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Mortgage } from 'src/app/models/mortgage';
import { MortgageCalculatorService } from 'src/app/services/mortgage-calculator.service';

@Component({
  selector: 'app-formula-panel',
  templateUrl: './formula-panel.component.html',
  styleUrls: ['./formula-panel.component.scss']
})
export class FormulaPanelComponent implements OnInit {

  @Output() event = new EventEmitter<boolean>();

  get mortgage(): Mortgage {
    return this.mortgageCalc.mortgage;
  }

  constructor(private mortgageCalc: MortgageCalculatorService) { }

  ngOnInit(): void {
  }

  closeModal(): void {
    this.event.emit(false);
  }

}
