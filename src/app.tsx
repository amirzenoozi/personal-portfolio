import React, { lazy, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './helpers/translate-helper';
import { AppState } from './redux/store';
import { routes } from 'src/pages/dashboard/dashborad.routes';
import { theme as UiTheme } from 'src/theme/theme';
import { ThemeProvider } from 'theming';

// Main Route With Different Layout
const Dashboard = lazy(() => import('./pages/dashboard'));
const NotFound = lazy(() => import('./pages/not-found'));

const App: React.FC = () => {
  const dispatch = useDispatch();
  const { direction, locale, theme } = useSelector(
      (state: AppState) => ({
        theme: state.AppSetting.theme,
        direction: state.AppSetting.direction,
        locale: state.AppSetting.locale,
      })
  );

  React.useLayoutEffect(() => {
    document.body.setAttribute('dir', direction);
  }, [direction]);

  return (
    <BrowserRouter>
      <ThemeProvider theme={UiTheme({ direction, theme })}>
        <Suspense fallback={'Loading...'}>
          <Routes>
            <Route path={`404`} element={<NotFound />} />
            <Route path={`/`} element={<Navigate to={`/${locale}/home`} replace />} />
            <Route path={`/${locale}/`} element={<Navigate to={`/${locale}/home`} replace />} />
            <Route path={`${locale}`} element={<Dashboard />}>
              {routes.map(({ path, ...rest }, index: number) => (
                <Route path={`${path}`} {...rest} key={index} />
              ))}
            </Route>
            <Route path={`*`} element={<Navigate to={`/404?from=${location.pathname.substring(1)}`} replace />} />
          </Routes>
        </Suspense>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
