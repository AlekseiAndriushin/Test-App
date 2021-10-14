import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { useTypedSelector } from '../hooks/useTypedSelector';
import { ErrorPage } from '../pages/404/ErrorPage';
import { privateRoutes, publicRoutes, RouteNames } from '../router';

export const AppRouter = () => {
	const { isAuth } = useTypedSelector(state => state.auth)
	return (
		<>
			<Switch>
				<Route exact={false} path={RouteNames.ERROR} component={ErrorPage} />
				{isAuth
					? (
						<Switch>
							{privateRoutes.map((route) => (
								<Route
									path={route.path}
									exact={route.exact}
									component={route.component}
									key={route.path}
								/>
							))}
							<Redirect to={RouteNames.HOME} />

						</Switch>)
					:
					(<Switch>
						{publicRoutes.map((route) => (
							<Route
								path={route.path}
								exact={route.exact}
								component={route.component}
								key={route.path}
							/>
						))}
						<Redirect to={RouteNames.LOGIN} />
					</Switch>)
				}

				{/* <Redirect to="/404"  /> */}
			</Switch>
		</>
	)
}