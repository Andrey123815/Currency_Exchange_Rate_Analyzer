import type { CurrencyType } from '../src/configurations/rates';
import type { GettingRateType } from '../src/API/Currency/types';

export const convert = (
  money: number,
  from: CurrencyType,
  to: CurrencyType,
  currentRates: GettingRateType,
): number => {
  if (from === 'RUB' && to === 'RUB') {
    return money;
  }

  if (from === 'RUB') {
    return money * currentRates[to];
  }

  if (to === 'RUB') {
    return money / currentRates[from];
  }

  const fromInRuble = currentRates[from];
  const toInRuble = currentRates[to];

  return (money * fromInRuble) / toInRuble;
};
