import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { publicRoutes, RouteNames } from '.';

export const UnAuthRoute = () => {
	
	return (
		<Switch>
			{publicRoutes.map((route) => (
				<Route
					path={route.path}
					exact={route.exact}
					component={route.component}
					key={route.path}
				/>
			))}
			<Redirect to={RouteNames.LOGIN}/>
		</Switch>
	)
}
