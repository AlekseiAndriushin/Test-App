import React from 'react'
import { useTheme } from '../../contexts/Theme/Theme.context'
import { ChangeButtons } from '../ChangeButtons/ChangeButtons'
import { Content } from '../Content/Content'
import Footer from '../Footer/Footer'
import Form from '../Form/Form'
import { HeaderContainer } from '../Header/HeaderContainer'
import Menu from '../Menu/Menu'
import './Container.scss'

export const Container = () => {
	const { theme } = useTheme()

	return (
		<div className="container" style={{ ...theme as React.CSSProperties }}>
			<HeaderContainer />
			<Content />
			<Menu />
			<Form />
			<Footer />
			<ChangeButtons />
		</div>
	)
}
