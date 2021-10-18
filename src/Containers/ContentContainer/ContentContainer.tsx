import React from 'react';
import { useDispatch } from 'react-redux';
import { RootState } from '../../store/store';

import { useTypedSelector } from '../../store/useTypedSelector';
import { Content } from '../../components/Content';
import { toggleCard } from '../../store/slices/Cards/cardsSlice';

export const ContentContainer = () => {
  const cards = useTypedSelector((state: RootState) => state.cards.card);

  const dispatch = useDispatch();

  const clickCard = (id: string) => {
    dispatch(toggleCard(id));
  };

  return <Content cards={cards} clickCard={clickCard} />;
};
