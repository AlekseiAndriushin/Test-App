import React from 'react';

export const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> =
  ({ title, onClick }) => {
    return (
      <button className='findListButton' onClick={onClick}>
        {title}
      </button>
    );
  };
