import React from 'react'
import { ChangeButtons } from './components/ChangeButtons/ChangeButtons'
import { FooterContainer } from './Containers/FooterContainer/FooterContainer'
import { FormContainer } from './Containers/FormContainer/FormContainer'
import { HeaderContainer } from './Containers/HeaderContainer/HeaderContainer'
import { MenuContainer } from './Containers/MenuContainer/MenuContainer'
import { useTheme } from './contexts/Theme/Theme.context'
import { ContentContainer } from './Containers/ContentContainer/ContentContainer'
import './App.scss'
export const App = () => {

	const { theme, setCurrentTheme } = useTheme()

	return (
		<div className="container" style={{ ...theme as React.CSSProperties }}>
			<HeaderContainer />
			<ContentContainer />
			<MenuContainer />
			<FormContainer />
			<ChangeButtons setCurrentTheme={setCurrentTheme} />
			<FooterContainer />
		</div>
	)
}