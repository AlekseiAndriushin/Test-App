import { checkingElementHit } from './checkingElementHit';
import { htmlTemplate } from './htmlTemplate';
import { getInfo, getFollowers, getUser } from './Api';
import { outputSelectedCompanies } from './outputSelectedCompanies';
import { takeTheme } from './takeTheme';
import './styles/index.scss';

htmlTemplate();
getUser();
getInfo();
getFollowers();
outputSelectedCompanies();
takeTheme();
checkingElementHit();
