import React, { useEffect } from 'react'
import { Header } from './components/Header/Header'
import { Content } from './components/Content/Content'
import Menu from './components/Menu/Menu'
import Form from './components/Form/Form'
import Footer from './components/Footer/Footer'
import { fetchFollowers } from './features/Api/followers/fetchFollowers'
import { useDispatch } from 'react-redux'
import { fetchGaearon } from './features/Api/gaearon/fetchGaearon'
import { fetchUser } from './features/Api/User/fetchUser'
import './App.scss'
import { useTheme } from './contexts/Theme/Theme.context'
import Button from './components/Button/Button'
const App = () => {
	const { theme, setCurrentTheme } = useTheme()
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(fetchFollowers())
		dispatch(fetchGaearon())
		dispatch(fetchUser())
	}, [])

	return (
		<div className={"container"} style={{ ...theme as React.CSSProperties }}>
			<Header />
			<Content />
			<Menu />
			<Form />
			<Footer />
			<section className={'container__buttons'}>
				<Button title='Сменить на красную тему' onClick={() => setCurrentTheme('red')} />
				<Button title='Сменить на синюю тему' onClick={() => setCurrentTheme('blue')} />
			</section>
		</div>
	)
}

export { App }