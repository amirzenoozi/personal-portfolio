import React from 'react';
import { useTranslation } from 'react-i18next';
import { LayoutProps } from './layout.interface';
import { useStyle } from './layout.style';

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const classes = useStyle();
  const { t } = useTranslation();


  return (
    <>
      <main className={classes.content}>
        {children}
      </main>
    </>
  );
};

export default Layout;
