import React from 'react'
import { useTheme } from '../../contexts/Theme/Theme.context'
import { ChangeButtons } from '../ChangeButtons/ChangeButtons'
import { Content } from '../Content/Content'
import { FooterContainer } from '../Footer/FooterContainer'
import { FormContainer } from '../Form/FormContainer'
import { HeaderContainer } from '../Header/HeaderContainer'
import { MenuContainer } from '../Menu/MenuContainer'
import './Container.scss'

export const Container = () => {
	const { theme } = useTheme()

	return (
		<div className="container" style={{ ...theme as React.CSSProperties }}>
			<HeaderContainer />
			<Content />
			<MenuContainer />
			<FormContainer />
			<ChangeButtons />
			<FooterContainer />
		</div>
	)
}
