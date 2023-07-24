import { FormattedMessage } from 'react-intl';

import { WalletOutlined } from '@ant-design/icons';

const icons = { WalletOutlined };

const depositWithDrawHistory = {
  id: 'group-account',

  type: 'group',
  children: [
    {
      id: 'history',
      title: <FormattedMessage id="history" />,
      type: 'item',
      icon: icons.WalletOutlined,
      url: '/history'
    }
  ]
};

export default depositWithDrawHistory;
