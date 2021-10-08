import React from 'react'
import { ChangeButtons } from './components/ChangeButtons/ChangeButtons'
import { Content } from './components/Content/Content'
import { FooterContainer } from './components/Footer/FooterContainer'
import { FormContainer } from './components/Form/FormContainer'
import { HeaderContainer } from './components/Header/HeaderContainer'
import { MenuContainer } from './components/Menu/MenuContainer'
import { useTheme } from './contexts/Theme/Theme.context'
import './App.scss'
import { ContentContainer } from './components/Content/ContentContainer'
export const App = () => {
	const { theme } = useTheme()

	return (
		<div className="container" style={{ ...theme as React.CSSProperties }}>
			<HeaderContainer />
			<ContentContainer />
			<MenuContainer />
			<FormContainer />
			<ChangeButtons />
			<FooterContainer />
		</div>
	)
}