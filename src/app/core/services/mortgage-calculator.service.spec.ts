import { TestBed } from '@angular/core/testing';
import { CoreModule } from '../core.module';
import { InterestType, Mortgage, MortgageAdapter } from '../models/mortgage';

import { MortgageCalculatorService } from './mortgage-calculator.service';

describe('Mortgage calculator service', () => {
  let service: MortgageCalculatorService;
  let adapter: MortgageAdapter;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CoreModule],
      providers: [MortgageCalculatorService]
    });
    service = TestBed.inject(MortgageCalculatorService);
    adapter = TestBed.inject(MortgageAdapter);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should calculate monthly payment', () => {
    const result: any = service.calculateMonthlyPayment(1500, 0.3);
    const expected: any = 450;
    expect(result).toBeTruthy();
    expect(result).toBeGreaterThan(0);
    expect(result).toEqual(expected);
  });

  it('should calculate max principal', () => {
    const input: Mortgage = adapter.adapt({
      interestRate: 2.0,
      years: 30,
      type: InterestType.fixed,
      percent: 0.8,
      monthlyPayment: 450,
    });
    const result: Mortgage = service.calculateMaxPrincipal(input);
    const expected: Mortgage = adapter.adapt({
      interestRate: 2.0,
      principal: 121746.83241833924,
      years: 30,
      type: InterestType.fixed,
      percent: 0.8,
      monthlyPayment: 450,
      maxHousePrice: 152183.54052292404
    });
    expect(result).toBeTruthy();
    expect(Object.keys(result)).toContain('principal');
    expect(result.principal).toBeTruthy();
    expect(result.principal).toBeGreaterThan(0);
    expect(Object.keys(result)).toContain('maxHousePrice');
    expect(result.maxHousePrice).toBeGreaterThan(0);
    expect(result).toEqual(expected);
  });
});
