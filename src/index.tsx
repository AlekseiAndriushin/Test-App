import React from 'react';
import { render } from 'react-dom';
import { App } from './App';
import { store } from './store/store';
import { Provider } from 'react-redux';
import { ThemeProvider } from './contexts/Theme/Theme.context';
import { BrowserRouter } from 'react-router-dom';
import './styles/index.scss';

render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('app')
);
