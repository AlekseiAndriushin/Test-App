import React from 'react';
import { ChangeButtons } from './components/ChangeButtons';
import { FooterContainer } from './Containers/FooterContainer';
import { HeaderContainer } from './Containers/HeaderContainer';
import { useTheme } from './contexts/Theme/Theme.context';
import { AppRouter } from './router/AppRouter';
import './App.scss';

export const App = () => {
  const { theme, setCurrentTheme } = useTheme();

  return (
    <div className="container" style={{ ...theme as React.CSSProperties }}>
      <HeaderContainer />
      <AppRouter />
      <FooterContainer />
      <ChangeButtons setCurrentTheme={setCurrentTheme} />
    </div>
  );
};
