import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../app/store'
import Button from '../Button/Button'
import './Menu.scss'

const Menu = () => {
	const takenCards = useSelector((state: RootState) => state.cards.card)
	const answer: Array<string> = []
	const findList = () => {
		takenCards.map((card) => card.taken ? answer.push(card.company) : null)
		console.clear()
		console.log(answer)

	};
	return (
		<menu className="menu">
			<Button title="узнать список компаний" onClick={findList} />
		</menu>
	)
}

export default Menu
