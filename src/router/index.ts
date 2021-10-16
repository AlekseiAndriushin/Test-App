import { Custom404 } from './../pages/Custom404/Custom404';
import React from 'react';
import { AboutPage } from '../pages/AboutPage';
import { Home } from '../pages/Home';
import { LoginFormContainer } from '../Containers/LoginFormContainer';

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
	{ path: RouteNames.ABOUT, exact: true, component: AboutPage },
	{ path: RouteNames.ERROR, exact: false, component: Custom404 },
]