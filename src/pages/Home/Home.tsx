import React from 'react';
import { ContentContainer } from '../../Containers/ContentContainer';
import { FormContainer } from '../../Containers/FormContainer';
import { MenuContainer } from '../../Containers/MenuContainer';
import './Home.scss';

export const Home = () => {
  return (
    <>
      <ContentContainer />
      <MenuContainer />
      <FormContainer />
    </>
  );
};
