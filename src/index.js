import React from 'react';
import { render } from 'react-dom';
import { App } from './App';
import { store } from './App/store';
import { Provider } from 'react-redux';
import './styles/index.scss';

render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('app')
);
