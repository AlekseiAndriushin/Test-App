import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { privateRoutes, publicRoutes, RouteNames } from '.';
import { useTypedSelector } from '../store/useTypedSelector';
import { Login } from '../pages/Login';

export const AppRouter = () => {

	const { isAuth } = useTypedSelector(state => state.auth)

	const authRoute =
		<Switch>
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

	const UnAuthRoute = <Switch>
		{publicRoutes.map((route) => (
			<Route
				path={route.path}
				exact={route.exact}
				component={route.component}
				key={route.path}
			/>
		))}
		<Route>
			<Login />
		</Route>
	</Switch>

	return (
		<Switch>
			{isAuth
				? authRoute
				: UnAuthRoute
			}
		</Switch>
	)
}