import React from 'react';
import { ContentContainer } from '../../Containers';
import { FormContainer } from '../../Containers';
import { MenuContainer } from '../../Containers';
import './Home.scss';

export const Home = () => (
  <>
    <ContentContainer />
    <MenuContainer />
    <FormContainer />
  </>
);
