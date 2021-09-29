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
