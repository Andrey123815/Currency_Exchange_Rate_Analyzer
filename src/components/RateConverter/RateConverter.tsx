import React, { useEffect, useRef, useState } from 'react';
import RateSelect from '../../UIKIT/RateSelect/RateSelect';
import type { CurrencyType } from '../../configurations/rates';
import type { GettingRateType } from '../../API/Currency/types';
import { convert } from '../../../utils/moneyConverter';
import './RateConverter.scss';

interface IRateConverterProps {
  currentRates: GettingRateType;
  rootCurrency: CurrencyType;
}

const RateConverter: React.FC<IRateConverterProps> = (props) => {
  const { currentRates, rootCurrency } = props;
  const [fromRate, setFromRate] = useState<CurrencyType>(() => rootCurrency || 'RUB');
  const [fromValue, setFromValue] = useState(0);

  const [toRate, setToRate] = useState<CurrencyType>('USD');
  const [toValue, setToValue] = useState(0);

  const refToCurrencyFromInput = useRef<HTMLInputElement>(null);

  const convertFunc = (
    value: string,
    fromCurrency: CurrencyType,
    toCurrency: CurrencyType,
    rates: GettingRateType,
  ): void => {
    let num = 0;
    if (value === '' || value === 'NaN') {
      setFromValue(0);
      setToValue(0);
      return;
    }

    num = parseInt(value, 4);
    setFromValue(num);
    setToValue(convert(num, fromCurrency, toCurrency, rates));
  };

  useEffect(() => {
    if (!refToCurrencyFromInput.current) {
      return;
    }
    convertFunc(refToCurrencyFromInput.current.value, fromRate, toRate, currentRates);
  }, [fromRate, toRate]);

  const setActiveRate = (type: 'from' | 'to') => (e: React.FormEvent<HTMLSelectElement>) => {
    if (type === 'from') {
      setFromRate(e.currentTarget.value as CurrencyType);
      return;
    }
    setToRate(e.currentTarget.value as CurrencyType);
  };

  const setCalculatedValueBy =
    (fromCurrency: CurrencyType, toCurrency: CurrencyType, rates: GettingRateType) =>
    (e: React.ChangeEvent<HTMLInputElement>): void => {
      convertFunc(e.currentTarget.value, fromCurrency, toCurrency, rates);
    };

  return (
    <div className="rate-converter">
      <div className="rate-converter__from-block">
        <RateSelect userTypeRateChoice={fromRate} onChange={setActiveRate('from')} />
        <input
          className="from-block__input"
          ref={refToCurrencyFromInput}
          value={fromValue}
          onChange={setCalculatedValueBy(fromRate, toRate, currentRates)}
          type="text"
        />
      </div>

      <div className="rate-converter__to-block">
        <RateSelect userTypeRateChoice={toRate} onChange={setActiveRate('to')} />
        <input className="from-block__input" readOnly value={toValue} type="text" />
      </div>
    </div>
  );
};

export default RateConverter;
