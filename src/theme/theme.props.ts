export interface ThemeProps {
  direction: 'rtl' | 'ltr',
  theme: 'light' | 'dark',
}

export interface ThemeInterface {
  direction: 'rtl' | 'ltr',
  palette: {
    background: string,
    primary: string,
    text: string,
  },
  spacing: (number: number) => any;
  radius: (type: 'xs' | 'sm' | 'md' | 'lg' | 'xlg' | 'full' | 'half') => any,
}
