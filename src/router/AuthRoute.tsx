import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { AboutPage, HomePage, NotFoundPage } from '../pages';

export enum RouteNames {
	HOME = '/',
	ERROR = '/404',
	ABOUT = '/about',
}

export const AuthRoute = () => {
	return	<Switch>
		<Switch>
			<Route path={RouteNames.HOME} exact component={HomePage} />
			<Route path={RouteNames.ABOUT} exact component={AboutPage} />
			<Route path={RouteNames.ERROR} exact={false} component={NotFoundPage} />
			<Redirect to={RouteNames.ERROR}/>
		</Switch>
		</Switch>
}
