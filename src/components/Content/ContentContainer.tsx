import React, { useCallback } from 'react'
import { RootState } from '../../app/store';

import { useTypedSelector } from '../../hooks/useTypedSelector';
import { Content } from './Content';
import './Content.scss'

export const ContentContainer = () => {
	const cards = useTypedSelector((state: RootState) => state.cards.card)

	const onContextMenu = useCallback((event: React.MouseEvent) => {
		event.preventDefault();
		alert('Меню для списка компаний');
	}, []);

	return (<Content cards={cards} onContextMenu={onContextMenu} />)
}