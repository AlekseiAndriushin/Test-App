import { Color } from '../../models/color.model';
import { ThemeType, Theme } from './Theme.model';

export const THEMES: Record<ThemeType, Theme> = {
	red: {
		'--primary': Color.TOMATO,
		'--secondary': Color.RED,
		'--text-color': Color.GRAY,
	},
	blue: {
		'--primary': Color.BLUE,
		'--secondary': Color.LIGHT_BLUE,
		'--text-color': Color.BLUE_THEME_TEXT_COLOR,
	}
};