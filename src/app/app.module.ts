import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { HeaderComponent } from './calculator/header/header.component';
import { FooterComponent } from './calculator/footer/footer.component';
import { InfoPanelComponent } from './calculator/info-panel/info-panel.component';
import { FormulaPanelComponent } from './calculator/formula-panel/formula-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    HeaderComponent,
    FooterComponent,
    InfoPanelComponent,
    FormulaPanelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
