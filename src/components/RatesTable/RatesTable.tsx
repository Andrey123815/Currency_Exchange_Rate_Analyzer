import React from 'react';
import type { GettingRateType } from '../../API/Currency/types';
import type { CurrencyType } from '../../configurations/rates';
import { RATES_FOR_DISPLAY } from '../../configurations/rates';
import './RatesTable.scss';
import { convert } from '../../../utils/moneyConverter';
import { isMobile } from '../../../utils/checkMobileVersion';

interface IRatesTableProps {
  rates: GettingRateType;
  rootCurrency: CurrencyType;
  lastUpdateTime: Date;
}

const RatesTable: React.FC<IRatesTableProps> = (props) => {
  const { rates, rootCurrency, lastUpdateTime } = props;
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Rates</th>
          <th>Current level</th>
          <th>Last update</th>
        </tr>
      </thead>

      <tbody>
        {RATES_FOR_DISPLAY.filter((rate) => rate !== rootCurrency).map((rate) => {
          const convertedRate = convert(1, rate, rootCurrency, rates);
          const convertedDate = lastUpdateTime.toLocaleString();
          const [, onlyTime] = convertedDate.split(', ');
          return (
            <tr key={rate}>
              <td>{rate}</td>
              <td>
                {isFinite(convertedRate)
                  ? `${convertedRate.toFixed(4)} ${rootCurrency}`
                  : 'Данные подгружаются...'}
              </td>
              <td>{isMobile() ? onlyTime : convertedDate}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default RatesTable;
