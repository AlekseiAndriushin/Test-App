import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { LoginPage } from '../pages';

enum RouteNames {
	LOGIN = '/login',
}

export const UnAuthRoute = () => {
	return (
		<Switch>
			<Route path={RouteNames.LOGIN} exact component={LoginPage} />
		<Route>
			<LoginPage />
		</Route>
		</Switch>
	)
}