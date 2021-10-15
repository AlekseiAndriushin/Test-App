import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { privateRoutes, publicRoutes, RouteNames } from '.';
import { useTypedSelector } from '../store/useTypedSelector';
import { Custom404 } from '../pages/Custom404';
import { LoginFormContainer } from '../Containers/LoginFormContainer';

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
				<Custom404 />
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
			<LoginFormContainer />
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