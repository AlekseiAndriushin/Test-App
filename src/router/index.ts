import { NotFoundPage } from './../pages';
import React from 'react';
import { AboutPage } from '../pages';
import { HomePage } from '../pages';
import { LoginFormContainer } from '../Containers';

export interface IRoute {
  path: string;
  component: React.ComponentType;
  exact?: boolean;
}

export enum RouteNames {
  LOGIN = '/login',
  HOME = '/',
  ERROR = '/404',
  ABOUT = '/about',
}

export const publicRoutes: IRoute[] = [
  { path: RouteNames.LOGIN, exact: true, component: LoginFormContainer },
];

export const privateRoutes: IRoute[] = [
  { path: RouteNames.HOME, exact: true, component: HomePage },
  { path: RouteNames.ABOUT, exact: true, component: AboutPage },
  { path: RouteNames.ERROR, exact: false, component: NotFoundPage },
];
