import { Injectable } from "@angular/core";
import { Adapter } from "./adapter";

export enum InterestType {
  fixed,
  variable
}
export interface Mortgage {
  interestRate: number;
  principal?: number;
  years: number;
  type: InterestType;
  percent: number;
  monthlyPayment: number;
  maxHousePrice: number;
}

// Injectable DTO object
@Injectable()
export class MortgageAdapter implements Adapter<Mortgage> {
  adapt(item: any): Mortgage {
    const mortgage: Mortgage = {
      interestRate: item.interestRate,
      principal: item.principal,
      years: item.years,
      type: item.type,
      percent: item.percent,
      monthlyPayment: item.monthlyPayment,
      maxHousePrice: item.maxHousePrice
    };
    return mortgage;
  }
}
