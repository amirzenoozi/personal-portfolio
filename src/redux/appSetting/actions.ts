import { IAppSettingActions, SET_DIRECTION, SET_LOCALE, SET_THEME } from './types';

const actions: IAppSettingActions = {
  setTheme: (theme) => ({
    type: SET_THEME,
    theme,
  }),
  setDirection: (direction) => ({
    type: SET_DIRECTION,
    direction,
  }),
  setLocale: (locale) => ({
    type: SET_LOCALE,
    locale,
  }),
};

export default actions;
