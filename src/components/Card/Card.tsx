import React, { useCallback, useState } from 'react';

import './Card.scss';

interface ICard {
  company?: string;
  address?: string;
  email?: string;
  phone?: string;
  taken?: boolean;
  id?: string;
}
interface ICardProps {
  card?: ICard;
  onClick?: (event: string) => void;
}

export const Card: React.FC<ICardProps> = ({ onClick, card }) => {
  const [isActive, setIsActive] = useState<boolean>(false);

  const clickCard = () => {
    if (card !== undefined) {
      onClick(card.id);
    }
  };

  const rightClick = useCallback((event: React.MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
    alert('Меню для карточки');
  }, []);
  const toggleClass = () => {
    setIsActive((oldActive) => !oldActive);
  };

  return (
    <li
      onContextMenu={rightClick}
      className={isActive ? 'card__selected' : 'card'}
      onClick={clickCard}
      onClickCapture={toggleClass}
    >
      <span>
        Название компании:
        {card?.company}
      </span>
      <span>
        Адрес:
        {card?.address}
      </span>
      <span>
        Email:
        {card?.email}
      </span>
      <span>
        Телефон:
        {card?.phone}
      </span>
    </li>
  );
};
