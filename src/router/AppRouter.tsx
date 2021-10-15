import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { privateRoutes, publicRoutes } from '.';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { ErrorPage } from '../pages/Custom404/Custom404';

export enum RouteNames {
	LOGIN = '/login',
	HOME = '/',
	ABOUT = '/about'
}

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
			<Route>
				<ErrorPage />
			</Route>
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
			<ErrorPage />
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