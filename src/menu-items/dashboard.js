// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { DashboardOutlined, GoldOutlined, HomeOutlined } from '@ant-design/icons';

// icons
const icons = {
  DashboardOutlined,
  GoldOutlined,
  HomeOutlined
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const dashboard = {
  id: 'group-dashboard',
  type: 'group',
  children: [
    {
      id: 'dashboard',
      type: 'item',
      url: '/dashboard',
      icon: icons.DashboardOutlined,
      title: <FormattedMessage id="dashboard" />
    },
    {
      id: 'components',
      title: <FormattedMessage id="components" />,
      type: 'item',
      url: '/components-overview/buttons',
      icon: icons.GoldOutlined,
      target: true,
      chip: {
        label: 'new',
        color: 'primary',
        size: 'small',
        variant: 'combined'
      }
    }
  ]
};

export default dashboard;
