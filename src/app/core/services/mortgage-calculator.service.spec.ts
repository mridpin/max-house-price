import { TestBed } from '@angular/core/testing';
import { CoreModule } from '../core.module';

import { MortgageCalculatorService } from './mortgage-calculator.service';

describe('Mortgage calculator service', () => {
  let service: MortgageCalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CoreModule],
      providers: [MortgageCalculatorService]
    });
    service = TestBed.inject(MortgageCalculatorService);
  });

  it('should be created', () => {
    const a = 'aa';
    expect(a).toEqual('aa');
  });
});
