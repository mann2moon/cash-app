import { FormattedMessage } from 'react-intl';

import { HistoryOutlined } from '@ant-design/icons';
const icons = { HistoryOutlined };

const depositWithDrawHistory = {
  id: 'group-history',

  type: 'group',
  children: [
    {
      id: 'history',
      title: <FormattedMessage id="history" />,
      type: 'item',
      icon: icons.HistoryOutlined,
      url: '/history'
    }
  ]
};

export default depositWithDrawHistory;
