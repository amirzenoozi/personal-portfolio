export const SET_THEME = 'SET_THEME';
export const SET_DIRECTION = 'SET_DIRECTION';
export const SET_LOCALE = 'SET_LOCALE';


export interface IAppSettingState {
  theme: 'light' | 'dark';
  direction: 'rtl' | 'ltr';
  locale: 'fa' | 'en';
}

interface ISetTheme {
  type: typeof SET_THEME;
  theme: IAppSettingState['theme'];
}

interface ISetDirection {
  type: typeof SET_DIRECTION;
  direction: IAppSettingState['direction'];
}

interface SetLocale {
  type: typeof SET_LOCALE;
  locale: IAppSettingState['locale'];
}

export interface IAppSettingActions {
  setTheme: (theme: IAppSettingState['theme']) => ISetTheme;
  setDirection: (direction: IAppSettingState['direction']) => ISetDirection;
  setLocale: (locale: IAppSettingState['locale']) => SetLocale;
}

export type AppSettingActionTypes =
  | ISetTheme
  | ISetDirection
  | SetLocale;
