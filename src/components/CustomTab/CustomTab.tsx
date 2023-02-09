import React from 'react';
import './CustomTab.scss';
import { NAV_ROUTES } from '../../configurations/navigation';

interface ICustomTabProps {
  setActiveTab: (newValue: string) => void;
  currentTab: string;
}

const CustomTab: React.FC<ICustomTabProps> = (props) => {
  const { setActiveTab, currentTab } = props;

  return (
    <ul className="custom-tab">
      {NAV_ROUTES.map(({ path, label }) => (
        <li
          className={currentTab === path ? 'tab active' : 'tab'}
          key={label}
          onClick={(): void => setActiveTab(path)}>
          {label}
        </li>
      ))}
    </ul>
  );
};

export default CustomTab;
