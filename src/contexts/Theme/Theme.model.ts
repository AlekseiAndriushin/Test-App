import { Color } from './color.model';

export type ThemeType = 'red' | 'blue';

export interface Theme {
	'--primary': Color;
	'--secondary': Color;
	'--text-color': Color;
	'--card-color': Color;
}