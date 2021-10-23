import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CalculatorModule } from './calculator/calculator.module';
import { FooterComponent } from './calculator/footer/footer.component';
import { HeaderComponent } from './calculator/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CalculatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
