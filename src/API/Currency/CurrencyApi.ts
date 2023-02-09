import { baseRequestProcessing } from '../BaseRequestProcessing';
import type { ICurrenciesExchange } from './types';

export const CurrencyApi = {
  getCurrenciesExchange(): Promise<ICurrenciesExchange> {
    return baseRequestProcessing<ICurrenciesExchange>('https://www.cbr-xml-daily.ru/latest.js');
  },
};
