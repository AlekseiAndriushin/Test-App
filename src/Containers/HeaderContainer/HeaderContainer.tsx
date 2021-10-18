import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { fetchUser } from '../../store/queries/user/fetchUser';
import { Header } from '../../components';

export const HeaderContainer = () => {

  const dispatch = useDispatch();

  const { user, isLoading } = useSelector((state: RootState) => state.user);

  useEffect(() => {
    dispatch(fetchUser());
  }, []);

  return <Header user={user} isLoading={isLoading} />;
};
