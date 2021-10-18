import React from 'react';
import { Loader } from '../Loader';
import './Footer.scss';

type Followers = {
  login: string;
  avatar_url: string;
};

type Gaearon = {
  name: string;
  avatar_url: string;
  company: string;
};
interface IFooterProps {
  gaearon: Gaearon;
  followers: Followers[];
  isLoading: boolean;
}

export const Footer: React.FC<IFooterProps> = ({
  gaearon,
  followers,
  isLoading,
}) => {
  return (
    <>
      <footer className='footer'>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <h5 className='footer__name'>{gaearon?.name}</h5>
            <h5 className='footer__company'>{gaearon?.company}</h5>
            <img
              src={`${gaearon?.avatar_url}`}
              alt={`${gaearon?.name}`}
              className='footer__gaearon__image'
            />
            <ul className='footer__followers__wrapper'>
              {followers?.map((follower) => {
                return (
                  <li className='footer__followers__item' key={follower.login}>
                    {follower.login}{' '}
                    <img
                      src={`${follower.avatar_url}`}
                      alt={follower.login}
                      className='footer__image'
                    />
                  </li>
                );
              })}
            </ul>
          </>
        )}
      </footer>
    </>
  );
};
