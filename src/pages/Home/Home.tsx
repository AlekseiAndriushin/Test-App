import React from 'react'
import { ContentContainer } from '../../Containers/ContentContainer/ContentContainer'
import { FormContainer } from '../../Containers/FormContainer/FormContainer'
import { MenuContainer } from '../../Containers/MenuContainer/MenuContainer'
import './Home.scss'

export const Home = () => {
	return (
		<>
			<ContentContainer />
			<MenuContainer />
			<FormContainer />
		</>
	)
}

