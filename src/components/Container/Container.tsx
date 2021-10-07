import React from 'react'
import { useTheme } from '../../contexts/Theme/Theme.context'
import Button from '../Button/Button'
import './Container.scss'

export const Container = ({ children }) => {
	const { theme, setCurrentTheme } = useTheme()

	return (
		<div className="container" style={{ ...theme as React.CSSProperties }}>
			{children}
			<section className={'container__buttons'}>
				<Button title='Сменить на красную тему' onClick={() => setCurrentTheme('red')} />
				<Button title='Сменить на синюю тему' onClick={() => setCurrentTheme('blue')} />
			</section>
		</div>
	)
}
