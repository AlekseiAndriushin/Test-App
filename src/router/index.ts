import React from 'react';
import { AboutPage } from '../pages/AboutPage/AboutPage';
import { Home } from '../pages/Home/Home';
import { LoginFormContainer } from '../Containers/LoginFormContainer/LoginFormContainer';

export interface IRoute {
	path: string;
	component: React.ComponentType;
	exact?: boolean;
}

export enum RouteNames {
	LOGIN = '/login',
	HOME = '/',
	ERROR = '/404',
	ABOUT = '/about'
}


export const publicRoutes: IRoute[] = [
	{ path: RouteNames.LOGIN, exact: true, component: LoginFormContainer }
]

export const privateRoutes: IRoute[] = [
	{ path: RouteNames.HOME, exact: true, component: Home },
	{ path: RouteNames.ABOUT, exact: true, component: AboutPage }
]