import type { CurrencyType } from '../../configurations/rates';

export type GettingRateType = Record<Partial<CurrencyType>, number>;

export interface ICurrenciesExchange {
  rates: Record<CurrencyType, number>;
}
