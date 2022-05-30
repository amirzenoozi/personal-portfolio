import React, { lazy } from 'react';

// Pages
const Main = lazy(() => import('src/pages/dashboard/main'));

export enum RouteName {
  MAIN = 'home',
}

export interface RouteProps {
  path: RouteName;
  element: any;
}

export const routes: RouteProps[] = [
  {
    path: RouteName.MAIN,
    element: <Main/>,
  },
];
