import { FormattedMessage } from 'react-intl';

import { WalletOutlined } from '@ant-design/icons';

const icons = { WalletOutlined };

const deposit = {
  id: 'group-account',

  type: 'group',
  children: [
    {
      id: 'deposit',
      title: <FormattedMessage id="deposit" />,
      type: 'item',
      icon: icons.WalletOutlined,
      url: '/deposit'
    }
  ]
};

export default deposit;
