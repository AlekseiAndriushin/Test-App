import React from 'react'
import { useTheme } from '../../contexts/Theme/Theme.context';
import Button from '../Button/Button';

export const ChangeButtons: React.FC = () => {
	const { theme, setCurrentTheme } = useTheme();
	return (
		<div className='container__buttons'>
			<Button title='Сменить на красную тему' onClick={() => setCurrentTheme('red')} />
			<Button title='Сменить на синюю тему' onClick={() => setCurrentTheme('blue')} />
		</div>
	)
}
