import { FormattedMessage } from 'react-intl';

import { WalletOutlined } from '@ant-design/icons';

const icons = { WalletOutlined };

const account = {
  id: 'group-account',

  type: 'group',
  children: [
    {
      id: 'account',
      title: <FormattedMessage id="Account" />,
      type: 'item',
      icon: icons.WalletOutlined,
      url: '/account'
    }
  ]
};

export default account;
