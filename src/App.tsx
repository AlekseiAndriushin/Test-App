import React from 'react'
import './App.scss'
import { ChangeButtons } from './components/ChangeButtons/ChangeButtons'
import { FooterContainer } from './Containers/FooterContainer/FooterContainer'
import { HeaderContainer } from './Containers/HeaderContainer/HeaderContainer'
import { useTheme } from './contexts/Theme/Theme.context'
import LoginContainer from './pages/Login/LoginContainer'

export const App = () => {

	const { theme, setCurrentTheme } = useTheme()

	return (
		<div className="container" style={{ ...theme as React.CSSProperties }}>
			<HeaderContainer />
			<LoginContainer />
			<FooterContainer />
			<ChangeButtons setCurrentTheme={setCurrentTheme} />
		</div >
	)
}