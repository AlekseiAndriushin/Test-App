import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { useTypedSelector } from '../store/useTypedSelector';
import { Login } from '../pages/Login';
import { Home } from '../pages/Home';
import { AboutPage } from '../pages/AboutPage';
import { Custom404 } from '../pages/Custom404';

export const AppRouter = () => {

	enum RouteNames {
		LOGIN = '/login',
		HOME = '/',
		ERROR = '/404',
		ABOUT = '/about'
	}

	const { isAuth } = useTypedSelector(state => state.auth)

	const authRoute =
		<Switch>
			<Route path={RouteNames.HOME} exact={true} component={Home} />
			<Route path={RouteNames.ABOUT} exact={true} component={AboutPage} />
			<Route path={RouteNames.ERROR} exact={false} component={Custom404} />
			<Redirect to={RouteNames.ERROR} >
				<Custom404 />
			</Redirect>
		</Switch>

	const UnAuthRoute = <Switch>
		<Route path={RouteNames.LOGIN} exact={true} component={Login} />
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