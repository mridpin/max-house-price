import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculatorComponent } from './calculator.component';
import { CoreModule } from '../core/core.module';
import { InfoPanelComponent } from './info-panel/info-panel.component';
import { FormulaPanelComponent } from './formula-panel/formula-panel.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CalculatorComponent,
    InfoPanelComponent,
    FormulaPanelComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    BrowserModule,
    FormsModule,
  ],
  exports: [
    CalculatorComponent
  ]
})
export class CalculatorModule { }
