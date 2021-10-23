import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { CalculatorModule } from './calculator/calculator.module';
import { FooterComponent } from './calculator/footer/footer.component';
import { HeaderComponent } from './calculator/header/header.component';
import { CoreModule } from './core/core.module';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
      ],
      imports: [
        CalculatorModule
      ]
    }).compileComponents();
  });

  it('should run dummy test', () => {
    const a = 'aa';
    expect(a).toEqual('aa');
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Cuánto me puedo hipotecar?'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Cuánto me puedo hipotecar?');
  });
});
