export type CurrencyType = 'RUB' | 'USD' | 'AUD' | 'GBP' | 'JPY' | 'CAD' | 'HKD' | 'CHF';

export const RATES_FOR_DISPLAY: CurrencyType[] = [
  'RUB',
  'USD',
  'AUD',
  'GBP',
  'JPY',
  'CAD',
  'HKD',
  'CHF',
];

interface IRateDescription {
  designation: string;
  description: string;
}

export const RATES_WITH_DESCRIPTION: Record<CurrencyType, IRateDescription> = {
  RUB: {
    designation: '₽',
    description: 'Российский рубль',
  },
  USD: {
    designation: '$',
    description: 'Доллар США',
  },
  AUD: {
    designation: 'A$',
    description: 'Австралийский доллар ',
  },
  GBP: {
    designation: '£',
    description: 'Фунт стерлингов',
  },
  JPY: {
    designation: '¥',
    description: 'Японская иена',
  },
  CAD: {
    designation: 'C$',
    description: 'Канадский доллар',
  },
  HKD: {
    designation: '元',
    description: 'Гонконгский доллар',
  },
  CHF: {
    designation: 'Fr',
    description: 'Швейцарский франк',
  },
};
