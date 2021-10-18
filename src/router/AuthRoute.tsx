import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { privateRoutes, RouteNames } from '.';


export const AuthRoute = () => {
	return	<Switch>
			{privateRoutes.map((route) => (
				<Route
					path={route.path}
					exact={route.exact}
					component={route.component}
					key={route.path}
				/>
			))}
			<Redirect to={RouteNames.ERROR} />
		</Switch>
}
