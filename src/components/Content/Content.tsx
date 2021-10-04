import React from 'react'
import { TypedUseSelectorHook, useSelector } from 'react-redux'
import { RootState } from '../../app/store'
import { selectCards } from '../../features/cards/cardsSlice';
import Card from '../Card/Card'

const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
export const Content = () => {
	const cards = useTypedSelector(selectCards)
	return (
		<div className="content">
			<ul className="components" id="components">
				{(cards.concat().reverse().map((card) => (
					<Card key={card.id} company={card.company} address={card.address} email={card.email} phone={card.phone} />
				)))}
				{[1, 2, 3, 4, 5, 6, 7, 8].map(index => {
					return (
						<Card key={index} />
					)
				})
				}
			</ul>
		</div>
	)
}
