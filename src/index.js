import React from 'react';
import { render } from 'react-dom';
import { App } from './App';
import { checkingElementHit } from './checkingElementHit';
import { htmlTemplate } from './htmlTemplate';
import {
  getRenderFollowers,
  getRenderGaearon,
  getRenderUser,
} from './Api';
import { outputSelectedCompanies } from './outputSelectedCompanies';
import { takeTheme } from './takeTheme';
import { store } from './App/store';
import { Provider } from 'react-redux';
import './styles/index.scss';

htmlTemplate();
getRenderUser();
getRenderGaearon();
getRenderFollowers();
outputSelectedCompanies();
takeTheme();
checkingElementHit();

render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('app')
);
