export enum InterestType {
    fixed,
    variable
}
export interface Mortgage {
    interestRate: number;
    principal: number;
    years: number;
    type: InterestType;
    percent: number;
}
