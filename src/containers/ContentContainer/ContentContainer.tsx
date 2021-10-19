import React from 'react';
import { useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import { useTypedSelector } from '../../store/useTypedSelector';
import { Content } from '../../components';
import { toggleCard } from '../../store/slices/cards/cardsSlice';

export const ContentContainer = () => {

  const cards = useTypedSelector((state: RootState) => state.cards.card);

  const dispatch = useDispatch();

  const clickCard = (id: string) => {
    dispatch(toggleCard(id));
  };

  return <Content cards={cards} clickCard={clickCard} />;
};
