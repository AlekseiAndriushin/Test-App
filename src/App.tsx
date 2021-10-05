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
const App = () => {
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(fetchFollowers())
		dispatch(fetchGaearon())
		dispatch(fetchUser())
	}, [])

	return (
		<div className="container">
			<Header />
			<Content />
			<Menu />
			<Form />
			<Footer />
		</div>
	)
}

export { App }
