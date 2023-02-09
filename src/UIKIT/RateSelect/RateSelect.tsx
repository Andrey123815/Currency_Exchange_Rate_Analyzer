import React from 'react';
import type { CurrencyType } from '../../configurations/rates';
import { RATES_FOR_DISPLAY, RATES_WITH_DESCRIPTION } from '../../configurations/rates';
import './RateSelect.scss';

interface IRateSelectProps {
  onChange: (e: React.FormEvent<HTMLSelectElement>) => void;
  userTypeRateChoice: CurrencyType | null;
}

const RateSelect: React.FC<IRateSelectProps> = (props) => {
  const { onChange, userTypeRateChoice } = props;
  return (
    <select className="rate-select" value={userTypeRateChoice || 'RUB'} onChange={onChange}>
      {RATES_FOR_DISPLAY.map((rate) => (
        <option value={rate} key={rate}>
          {`${rate} - ${RATES_WITH_DESCRIPTION[rate].description} ${RATES_WITH_DESCRIPTION[rate].designation}`}
        </option>
      ))}
    </select>
  );
};

export default RateSelect;
