import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../app/store'
import { Menu } from './Menu'
import './Menu.scss'

export const MenuContainer = () => {
	const takenCards = useSelector((state: RootState) => state.cards.card)
	const answer: Array<string> = []
	const findList = () => {
		takenCards.map((card) => card.taken ? answer.push(card.company) : null)
		if (answer.length) {
			console.clear()
			console.log(answer)
		} else {
			console.log("тут пусто")
		}

	};
	return (
		<Menu findList={findList} />
	)
}

