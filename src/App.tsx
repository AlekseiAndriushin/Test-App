import React from 'react'
import { Header } from './components/Header/Header'
import { Content } from './components/Content/Content'
import Menu from './components/Menu/Menu'
import Form from './components/Form/Form'
import Footer from './components/Footer/Footer'
const App = () => {
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
