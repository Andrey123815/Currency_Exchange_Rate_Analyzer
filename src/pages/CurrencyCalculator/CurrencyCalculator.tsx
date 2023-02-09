import React from 'react';
import RateConverter from '../../components/RateConverter/RateConverter';
import type { GettingRateType } from '../../API/Currency/types';
import type { CurrencyType } from '../../configurations/rates';
import './CurrencyCalculator.scss';

interface ICurrencyCalculator {
  currentRates: GettingRateType;
  rootCurrency: CurrencyType;
}

const CurrencyCalculator: React.FC<ICurrencyCalculator> = (props) => {
  const { currentRates, rootCurrency } = props;
  return (
    <div className="currency-calculator">
      <RateConverter currentRates={currentRates} rootCurrency={rootCurrency} />
    </div>
  );
};

export default CurrencyCalculator;
