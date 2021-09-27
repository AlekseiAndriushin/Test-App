import { checkingElementHit } from './checkingElementHit';
import { htmlTemplate } from './htmlTemplate';
import { queries } from './queries';
import { outputSelectedCompanies } from './outputSelectedCompanies';
import { takeTheme } from './takeTheme';
import './styles/index.scss';

htmlTemplate();
queries();
outputSelectedCompanies();
takeTheme();
checkingElementHit();
