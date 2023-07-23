// import { lazy } from 'react';
import { useRoutes } from 'react-router-dom';

// project import
// import CommonLayout from 'layout/CommonLayout';
// import Loadable from 'components/Loadable';
import ComponentsRoutes from './ComponentsRoutes';
import LoginRoutes from './LoginRoutes';
import MainRoutes from './MainRoutes';

// render - landing page
// const DashboardDefault = Loadable(lazy(() => import('pages/dashboard/default')));

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
  return useRoutes([LoginRoutes, ComponentsRoutes, MainRoutes]);
}
