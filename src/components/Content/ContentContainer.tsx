import React from 'react'
import { RootState } from '../../app/store';

import { useTypedSelector } from '../../hooks/useTypedSelector';
import { Content } from './Content';
import './Content.scss'

export const ContentContainer = () => {
	const cards = useTypedSelector((state: RootState) => state.cards.card)

	return (<Content cards={cards} />)
}