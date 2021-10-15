import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { useTypedSelector } from '../hooks/useTypedSelector';
import { ErrorPage } from '../pages/404/ErrorPage';
import { AboutPage } from '../pages/AboutPage/AboutPage';
import { Home } from '../pages/Home/Home';
import { Login } from '../pages/Login/Login';

export enum RouteNames {
	LOGIN = '/login',
	HOME = '/',
	ABOUT = '/about'
}

export const AppRouter = () => {
	const { isAuth } = useTypedSelector(state => state.auth)
	return (
		<>
			<Switch>
				{isAuth
					? (
						<Switch>
							<Route exact={true} path={RouteNames.HOME} component={Home} />
							<Route exact={true} path={RouteNames.ABOUT} component={AboutPage} />
							<Route>
								<ErrorPage />
							</Route>
						</Switch>)
					:
					(<Switch>
						<Route exact={true} path={RouteNames.LOGIN} component={Login} />
						<Route>
							<ErrorPage />
						</Route>
					</Switch>)
				}

			</Switch>
		</>
	)
}