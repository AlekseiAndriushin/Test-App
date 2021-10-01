import React from 'react'
import { Header } from './components/Header/Header'
import { Content } from './components/Content/Content'
import Menu from './components/Menu/Menu'
import Form from './components/Form/Form'
const App = () => {
	return (
		<>
			<Header />
			<Content />
			<Menu />
			<Form />
		</>
	)
}

export { App }
