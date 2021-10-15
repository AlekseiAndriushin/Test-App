import React, { Dispatch, SetStateAction } from 'react'
import { Button } from '../Button';

type ThemeType = 'red' | 'blue';

interface IChangeButtonsProps {
	setCurrentTheme: Dispatch<SetStateAction<ThemeType>>
}

export const ChangeButtons: React.FC<IChangeButtonsProps> = ({ setCurrentTheme }) => {
	return (
		<div className='container__buttons'>
			<Button title='Сменить на красную тему' onClick={() => setCurrentTheme('red')} />
			<Button title='Сменить на синюю тему' onClick={() => setCurrentTheme('blue')} />
		</div>
	)
}
