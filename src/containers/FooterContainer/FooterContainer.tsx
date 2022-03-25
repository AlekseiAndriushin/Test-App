import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchFollowers } from '../../store/queries/followers/fetchFollowers';
import { fetchGaearon } from '../../store/queries/gaearon/fetchGaearon';
import { Footer } from '../../components';
import { useTypedSelector } from '../../store/useTypedSelector';

export const FooterContainer = () => {
  const dispatch = useDispatch();
  const { gaearon } = useTypedSelector((state) => state.gaearon);
  const { followers, isLoading } = useTypedSelector((state) => state.followers);
  const fetchLimit = 30;

  useEffect(() => {
    dispatch(
      fetchFollowers({
        per_page: fetchLimit,
      })
    );
    dispatch(fetchGaearon());
  }, []);

  return (
    <Footer gaearon={gaearon} followers={followers} isLoading={isLoading} />
  );
};
