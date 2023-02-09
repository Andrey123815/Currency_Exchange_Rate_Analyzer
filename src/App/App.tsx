import './App.scss';
import React, { useEffect, useRef, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import TabController from '../components/TabController/TabController';
import { NAV_ROUTES } from '../configurations/navigation';
import type { GettingRateType } from '../API/Currency/types';
import { CURRENCY_REQUEST_COUNT_PER_MINUTE } from '../configurations/request';
import RateSelect from '../UIKIT/RateSelect/RateSelect';
import type { CurrencyType } from '../configurations/rates';
import CurrencyExchange from '../pages/CurrencyExchange/CurrencyExchange';
import CurrencyCalculator from '../pages/CurrencyCalculator/CurrencyCalculator';
import { initialCurrencyObj } from '../configurations/defaultCurremcies';
import { CurrencyApi } from '../API/Currency/CurrencyApi';
import { isMobile } from '../../utils/checkMobileVersion';

const App: React.FC = () => {
  const [currentRates, setCurrentRates] = useState<GettingRateType>(initialCurrencyObj);
  const [lastUpdateTime, setLastUpdateTime] = useState<Date>(new Date());
  const [rootCurrencyChoice, setRootCurrencyChoice] = useState<CurrencyType>(
    () => (localStorage.getItem('rootCurrency') as CurrencyType) || '',
  );

  const timerID = useRef<number>(0);
  const navigate = useNavigate();

  const onSelectRootCurrency = (e: React.FormEvent<HTMLSelectElement>): void => {
    localStorage.setItem('rootCurrency', e.currentTarget.value);
    setRootCurrencyChoice(e.currentTarget.value as CurrencyType);
  };

  const res = async (): Promise<void> => {
    const currenciesStatistics = await CurrencyApi.getCurrenciesExchange();
    setCurrentRates(currenciesStatistics.rates);
    setLastUpdateTime(new Date());
  };

  useEffect(() => {
    navigate(NAV_ROUTES[0].path);
  }, []);

  useEffect(() => {
    if (!timerID.current) {
      res().finally();
    }
    timerID.current = setInterval(async () => {
      const currenciesStatistics = await CurrencyApi.getCurrenciesExchange();
      setCurrentRates(currenciesStatistics.rates);
      setLastUpdateTime(new Date());
    }, (60 / CURRENCY_REQUEST_COUNT_PER_MINUTE) * 1000);

    return (): void => {
      clearInterval(timerID.current);
    };
  }, []);

  return (
    <div className="app">
      <header className="app__greeting">Welcome to the currency calculator!</header>
      <details className="app__root-currency-settings">
        <summary className="">Click here to choose your preferred currency</summary>
        <RateSelect userTypeRateChoice={rootCurrencyChoice} onChange={onSelectRootCurrency} />
      </details>
      <nav className="app__nav-tabs">
        <TabController />
      </nav>
      <main className="app__main-content">
        <Routes>
          <Route
            key={NAV_ROUTES[0].path}
            path={NAV_ROUTES[0].path}
            element={
              <CurrencyCalculator currentRates={currentRates} rootCurrency={rootCurrencyChoice} />
            }
          />
          <Route
            key={NAV_ROUTES[1].path}
            path={NAV_ROUTES[1].path}
            element={
              <CurrencyExchange
                currentRates={currentRates}
                lastUpdateTime={lastUpdateTime}
                rootCurrency={rootCurrencyChoice}
              />
            }
          />
        </Routes>
      </main>
      <footer className="app__footer">Credit Bank of Moscow</footer>
      <mark className="app__author-links">
        <a href="https://github.com/Andrey123815">Об авторе</a>
      </mark>
      {isMobile() ? (
        <aside className="app__left-aside-block_foot" />
      ) : (
        <>
          <aside className="app__left-aside-block" />
          <aside className="app__right-aside-block" />
        </>
      )}
    </div>
  );
};

export default App;
