import React from 'react'
import { Button } from '../Button/Button'
import './Menu.scss'

interface IMenuProps {
	findList?: () => void;
}

export const Menu: React.FC<IMenuProps> = ({ findList }) => {

	return (
		<menu className="menu">
			<Button title="узнать список компаний" onClick={findList} />
		</menu>
	)
}

