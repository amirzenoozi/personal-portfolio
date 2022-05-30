import { localStore } from 'src/helpers/storage-helper';
import { environment } from '../../../environments/environment';
import { AppSettingActionTypes, IAppSettingState, SET_DIRECTION, SET_LOCALE, SET_THEME } from './types';

const initialState: IAppSettingState = {
  theme: (localStore.get('theme') as IAppSettingState['theme']) || environment.theme as IAppSettingState['theme'],
  direction: (localStore.get('direction') as IAppSettingState['direction']) || environment.initialLang.dir as IAppSettingState['direction'],
  locale: (localStore.get('lng') as IAppSettingState['locale']) || environment.initialLang.lng as IAppSettingState['locale'],
};

const appSettingReducer = (
    state = initialState,
    action: AppSettingActionTypes
) => {
  switch (action.type) {
    case SET_THEME:
      localStore.set('theme', action.theme);
      return {
        ...state,
        theme: action.theme,
      };
    case SET_DIRECTION:
      localStore.set('direction', action.direction);
      return {
        ...state,
        direction: action.direction,
      };
    case SET_LOCALE:
      localStore.set('lng', action.locale);
      return {
        ...state,
        locale: action.locale,
      };
    default:
      return state;
  }
};

export default appSettingReducer;
