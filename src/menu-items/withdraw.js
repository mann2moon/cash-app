import { FormattedMessage } from 'react-intl';

import { WalletOutlined } from '@ant-design/icons';
import { Divider } from '@mui/material';

const icons = { WalletOutlined };

const withdraw = {
  id: 'group-account',

  type: 'group',
  title: <Divider />,
  children: [
    {
      id: 'withdraw',
      title: <FormattedMessage id="withdraw" />,
      type: 'item',
      icon: icons.WalletOutlined,
      url: '/withdraw'
    }
  ]
};

export default withdraw;
