import React from 'react';
import type { GettingRateType } from '../../API/Currency/types';
import RatesTable from '../../components/RatesTable/RatesTable';
import type { CurrencyType } from '../../configurations/rates';

interface ICurrencyExchangeProps {
  currentRates: GettingRateType;
  rootCurrency: CurrencyType;
  lastUpdateTime: Date;
}

const CurrencyExchange: React.FC<ICurrencyExchangeProps> = (props) => {
  const { currentRates, rootCurrency, lastUpdateTime } = props;
  return (
    <div style={{ color: 'white' }}>
      <RatesTable
        rates={currentRates}
        lastUpdateTime={lastUpdateTime}
        rootCurrency={rootCurrency}
      />
    </div>
  );
};

export default CurrencyExchange;
