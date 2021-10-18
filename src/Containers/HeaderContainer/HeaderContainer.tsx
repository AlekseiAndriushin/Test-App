import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { fetchUser } from '../../store/queries/user/fetchUser';
import { Header } from '../../components/Header';

export const HeaderContainer = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUser());
  }, []);
  const { user, isLoading } = useSelector((state: RootState) => state.user);

  return <Header user={user} isLoading={isLoading} />;
};
