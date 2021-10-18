import React from 'react';
import { Link } from 'react-router-dom';
import './Custom404Component.scss';

export const Custom404Component: React.FC = () => {
  return (
    <>
      <Link to='/' className='linkText'>
        Вернуться на страницу с карточками
      </Link>
    </>
  );
};
