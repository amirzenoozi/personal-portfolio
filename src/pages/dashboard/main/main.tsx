import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useStyle } from './main.style';
import { useDispatch } from 'react-redux';
import actions from 'src/redux/actions';
import { useNavigate, useLocation } from 'react-router-dom';


const Main = () => {
  const classes = useStyle();
  const search = window.location.search;
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const params = new URLSearchParams(search);
  const { i18n } = useTranslation();
  const dispatch = useDispatch();

  const [ languageList, setLanguageList ] = useState([
    { title: 'Persian', slug: 'fa', direction: 'rtl', flag: 'IR', theme: 'light' },
    { title: 'English', slug: 'en', direction: 'ltr', flag: 'US', theme: 'dark' },
  ]);

  const changeLanguage = (language: any) => {
    i18n.changeLanguage(language.slug);
    dispatch(actions.AppSetting.setDirection(language.direction));
    dispatch(actions.AppSetting.setTheme(language.theme));
    dispatch(actions.AppSetting.setLocale(language.slug));
  };

  return (
    <div className={classes.PageWrapper}>
      <p className={classes.PageTitle}>Amirhossein Douzandeh Zenoozi</p>
      {languageList.map((item, index) => (
        <button
          key={index}
          onClick={() => {
            const pathList = pathname.split('/');
            pathList.splice(1, 1);
            changeLanguage(item);
            navigate(`/${item.slug}${pathList.join('/')}`);
          }}
        >
          {item.title}
        </button>
      ))}
    </div>
  );
};

export default Main;
