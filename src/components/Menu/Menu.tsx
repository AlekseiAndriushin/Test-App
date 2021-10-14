import React, { SyntheticEvent } from 'react'
import { Button } from '../Button/Button'
import './Menu.scss'

interface IMenuProps {
	findList?: () => void;
	isAuth: boolean;
	handleLogout: (event: SyntheticEvent) => void;
}

export const Menu: React.FC<IMenuProps> = ({ findList, isAuth, handleLogout }) => {

	return (
		<menu className="menu">
			<Button title="узнать список компаний" onClick={findList} />
			{isAuth ? <Button title="выйти" onClick={handleLogout} /> : 'null'}
		</menu>
	)
}

