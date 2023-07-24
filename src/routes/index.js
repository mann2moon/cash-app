// import { lazy } from 'react';
import { useRoutes } from 'react-router-dom';

// project import
import CommonLayout from 'layout/CommonLayout';
// import Loadable from 'components/Loadable';
import LoginRoutes from './LoginRoutes';
import MainRoutes from './MainRoutes';
import Landing from 'pages/Landing';

// render - landing page
// const DashboardDefault = Loadable(lazy(() => import('pages/dashboard/default')));

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
  return useRoutes([
    {
      path: '/',
      element: <CommonLayout layout="landing" />,
      children: [
        {
          path: '/',
          element: <Landing />
        }
      ]
    },
    LoginRoutes,
    MainRoutes
  ]);
}
