import React, { FocusEvent, SyntheticEvent } from 'react';
import { Button } from '../Button';
import { Loader } from '../Loader';
import './LoginForm.scss';

interface IFormLoginData {
  user: string;
  password: string;
}

interface IFormLogin {
  formLogin: IFormLoginData;
  error: string;
  isLoading: boolean;
  onChange: (e: FocusEvent<HTMLInputElement>) => void;
  handleSubmit: (event: SyntheticEvent) => void;
}

export const LoginForm: React.FC<IFormLogin> = ({
  error,
  formLogin,
  onChange,
  handleSubmit,
  isLoading,
}) => (
  <div className='LoginForm'>
    {isLoading && <Loader />}

    {!isLoading && (
      <form onSubmit={handleSubmit}>
        {error && <div className='LoginForm__errorText'>{error}</div>}

        <input
          type='text'
          className='LoginForm__input'
          name='user'
          placeholder='Введите имя'
          required
          value={formLogin.user}
          onChange={onChange}
        />

        <input
          type='password'
          className='LoginForm__input'
          name='password'
          placeholder='Введите пароль'
          required
          value={formLogin.password}
          onChange={onChange}
        />

        <Button title='Войти' />
      </form>
    )}
  </div>
);
