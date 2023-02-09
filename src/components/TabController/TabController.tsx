import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CustomTab from '../CustomTab/CustomTab';
import { NAV_ROUTES } from '../../configurations/navigation';

const currencyExchangePage = NAV_ROUTES[0].path;

const TabController: React.FC = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(currencyExchangePage);

  const handleMoveToOtherPage = (newValue: string): void => {
    setCurrentPage(newValue);
    navigate(newValue);
  };

  return <CustomTab setActiveTab={handleMoveToOtherPage} currentTab={currentPage} />;
};

export default TabController;
