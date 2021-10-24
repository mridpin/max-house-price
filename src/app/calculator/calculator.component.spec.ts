import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { CoreModule } from '../core/core.module';

import { CalculatorComponent } from './calculator.component';

describe('CalculatorComponent', () => {
  let component: CalculatorComponent;
  let fixture: ComponentFixture<CalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CalculatorComponent],
      imports: [CoreModule, FormsModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should allow send', () => {
    component.years = '30';
    component.checkSend();
    expect(component.canSend).toBeFalse();
    component.income = '1500';
    component.ipa = '2.0';
    component.debtPercent = '0.3';
    component.financePercent = '0.8';
    expect(component.canSend).toBeFalse();
    component.checkSend();
    expect(component.canSend).toBeTrue();
  });

  it('should update income from input', () => {
    const hostElement: HTMLElement = fixture.nativeElement;
    // income field
    const incomeInput: HTMLInputElement = hostElement.querySelector('#incomeInput')! as HTMLInputElement;
    incomeInput.value = '1500';
    expect(component.income).toBeUndefined();
    incomeInput.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(component.income).toBeDefined();
    expect(component.income.toString()).toBe('1500');
  });

  it('should update ipa from input', () => {
    // ipa field
    const hostElement: HTMLElement = fixture.nativeElement;
    const ipaInput: HTMLInputElement = hostElement.querySelector('#ipaInput')! as HTMLInputElement;
    ipaInput.value = '2';
    expect(component.ipa).toBeUndefined();
    ipaInput.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(component.ipa).toBeDefined();
    expect(component.ipa.toString()).toBe('2');
  });

  it('should update years from input', () => {
    // years field
    const hostElement: HTMLElement = fixture.nativeElement;
    const yearsInput: HTMLInputElement = hostElement.querySelector('#yearsInput')! as HTMLInputElement;
    yearsInput.value = '30';
    expect(component.years).toBeUndefined();
    yearsInput.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(component.years).toBeDefined();
    expect(component.years.toString()).toBe('30');
  });

  it('should update debtpercent from input', () => {
    // debtPercent field
    const hostElement: HTMLElement = fixture.nativeElement;
    expect(hostElement.querySelector('#debtPercentInput')).toBeNull();
    component.showExtras = true;
    fixture.detectChanges();
    const debtPercentInput: HTMLInputElement = hostElement.querySelector('#debtPercentInput')! as HTMLInputElement;
    expect(debtPercentInput).toBeTruthy();
    debtPercentInput.value = '0.3';
    expect(component.debtPercent).toBe('30');
    debtPercentInput.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(component.debtPercent).toBeDefined();
    expect(component.debtPercent.toString()).toEqual('0.3');
  });

  it('should update financepercent from input', () => {
    // financepercent field
    const hostElement: HTMLElement = fixture.nativeElement;
    expect(hostElement.querySelector('#financePercentInput')).toBeNull();
    component.showExtras = true;
    fixture.detectChanges();
    const financePercentInput: HTMLInputElement = hostElement.querySelector('#financePercentInput')! as HTMLInputElement;
    expect(financePercentInput).toBeTruthy();
    financePercentInput.value = '0.8';
    expect(component.financePercent).toBe('80');
    financePercentInput.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(component.financePercent).toBeDefined();
    expect(component.financePercent.toString()).toEqual('0.8');
  });
});
