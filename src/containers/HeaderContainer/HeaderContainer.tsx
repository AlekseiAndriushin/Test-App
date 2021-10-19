import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchUser } from '../../store/queries/user/fetchUser';
import { Header } from '../../components';
import { useTypedSelector } from '../../store/useTypedSelector';

export const HeaderContainer = () => {
  const dispatch = useDispatch();
  const { user, isLoading } = useTypedSelector((state) => state.user);

  useEffect(() => {
    dispatch(fetchUser());
  }, []);

  return <Header user={user} isLoading={isLoading} />;
};
