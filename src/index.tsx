import React from 'react';
import { render } from 'react-dom';
import { App } from './App';
import { store } from './App/store';
import { Provider } from 'react-redux';
import { ThemeProvider } from './contexts/Theme/Theme.context';
import './styles/index.scss';

render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('app')
);
