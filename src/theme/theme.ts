import { ThemeInterface, ThemeProps } from 'src/theme/theme.props';

export const theme = ({ direction, theme }: ThemeProps): ThemeInterface => {
  return ({
    direction,
    palette: {
      background: (theme === 'light') ? '#D5D5D5' : '#1A1A1A',
      primary: (theme === 'light') ? '#E76161' : '#E76161',
      text: (theme === 'light') ? '#262626' : '#D5D5D5',
    },
    spacing: (number) => {
      return number * 4;
    },
    radius: (type) => {
      const radiusTypes = {
        xs: 4,
        sm: 8,
        md: 12,
        lg: 16,
        xlg: 20,
        full: '100%',
        half: '50%',
      };
      return radiusTypes[type];
    },
  });
};
