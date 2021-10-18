import React from 'react';
import { Link } from 'react-router-dom';
import './Custom404Component.scss';

export const Custom404Component: React.FC = () => (
  <>
    <Link to='/' className='linkText'>
      Зайти на страницу с карточками
    </Link>
  </>
);
