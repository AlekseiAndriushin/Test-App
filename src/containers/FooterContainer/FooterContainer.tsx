import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { fetchFollowers } from '../../store/queries/followers/fetchFollowers';
import { fetchGaearon } from '../../store/queries/gaearon/fetchGaearon';
import { Footer } from '../../components';

export const FooterContainer = () => {

  const dispatch = useDispatch();

  const { followers, isLoading } = useSelector(
    (state: RootState) => state.followers
  );

  const { gaearon } = useSelector((state: RootState) => state.gaearon);

  useEffect(() => {
    dispatch(fetchFollowers());
    dispatch(fetchGaearon());
  }, []);

  return (
    <Footer gaearon={gaearon} followers={followers} isLoading={isLoading} />
  );
};
