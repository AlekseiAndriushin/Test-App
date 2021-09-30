import React from 'react';
import { render } from 'react-dom';

import { checkingElementHit } from './checkingElementHit';
import { htmlTemplate } from './htmlTemplate';
import {
  getRenderFollowers,
  getRenderGaearon,
  getRenderUser,
} from './Api';
import { outputSelectedCompanies } from './outputSelectedCompanies';
import { takeTheme } from './takeTheme';
import './styles/index.scss';

htmlTemplate();
getRenderUser();
getRenderGaearon();
getRenderFollowers();
outputSelectedCompanies();
takeTheme();
checkingElementHit();

render(<h2>test</h2>, document.getElementById('app'));
