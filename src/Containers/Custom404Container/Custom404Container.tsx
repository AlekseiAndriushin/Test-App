import React from 'react';
import { useTypedSelector } from '../../store/useTypedSelector';
import { Custom404Component } from '../../components/Custom404Component';

export const Custom404Container = () => {
  const { isAuth } = useTypedSelector((state) => state.auth);

  return <Custom404Component isAuth={isAuth} />;
};
