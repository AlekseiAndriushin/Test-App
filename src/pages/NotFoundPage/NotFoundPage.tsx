import React from 'react';
import { Link } from 'react-router-dom';
import './NotFoundPage.scss';

export const NotFoundPage = () => {
  return (
    <Link to='/' className='linkText'>
      Зайти на страницу с карточками
    </Link>
  );
};
