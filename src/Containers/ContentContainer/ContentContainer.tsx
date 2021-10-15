import React from 'react'
import { RootState } from '../../app/store';

import { useTypedSelector } from '../../hooks/useTypedSelector';
import { Content } from '../../components/Content';
import { useDispatch } from 'react-redux';
import { toggleCard } from '../../features/Slices/Cards/cardsSlice';

export const ContentContainer = () => {

	const cards = useTypedSelector((state: RootState) => state.cards.card)

	const dispatch = useDispatch()


	const clickCard = (id: string) => {
		dispatch(toggleCard(id))
	}

	return (<Content cards={cards} clickCard={clickCard} />)
}