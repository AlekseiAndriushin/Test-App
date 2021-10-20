import React from 'react';
import { Link } from 'react-router-dom';
import './AboutPage.scss';

export const AboutPage = () => (
  <div className='aboutPage'>
    <div className='aboutPage__text'>привет!</div>

    <Link to='/' className='aboutPage__linkText'>
      Нажми на меня чтобы вернуться на страницу с карточками
    </Link>
  </div>
);
