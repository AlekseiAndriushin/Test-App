import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { LoginPage } from '../pages';

export enum RouteNames {
	LOGIN = '/login',
}

export const UnAuthRoute = () => {
	return (
		<Switch>
			<Route path={RouteNames.LOGIN} exact component={LoginPage} />
			<Redirect to={RouteNames.LOGIN} />
		</Switch>
	)
}
