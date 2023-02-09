interface INavObject {
  label: string;
  path: string;
}

export const NAV_ROUTES: INavObject[] = [
  {
    label: 'Currency Calculator',
    path: '/currency-calculator',
  },
  {
    label: 'Currency Exchange',
    path: '/currency-exchange',
  },
];
