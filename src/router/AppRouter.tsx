import React from 'react';
import { Switch } from 'react-router-dom';
import { useTypedSelector } from '../store/useTypedSelector';
import { AuthRoute } from './AuthRoute';
import { UnAuthRoute } from './UnAuthRoute';

export const AppRouter = () => {
  const { isAuth } = useTypedSelector((state) => state.auth);

  return <Switch>{isAuth ? <AuthRoute /> : <UnAuthRoute />}</Switch>;
};
