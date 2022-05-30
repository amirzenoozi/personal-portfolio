import React from 'react';
import { useLocation, Outlet } from 'react-router-dom';
import Layout from 'src/layout';
import { useSelector } from 'react-redux';
import { AppState } from 'src/redux/store';

const Dashboard = () => {
  const location = useLocation();

  const { locale } = useSelector((state: AppState) => ({
    locale: state.AppSetting.locale,
  }));

  return (
    <Layout>
      <Outlet />
    </Layout>
  );
};

export default Dashboard;
