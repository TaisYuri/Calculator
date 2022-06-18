import { DefaultTheme,  } from 'styled-components';
import {lightTheme, darkTheme} from './theme';

const defaultTheme = {
  fontSizes: {
    small: '16px',
    medium: '18px',
    large: '20px',
  },
};

function combineTheme(theme: any): DefaultTheme {
  return { ...defaultTheme, ...theme };
}

export { combineTheme, lightTheme, darkTheme };