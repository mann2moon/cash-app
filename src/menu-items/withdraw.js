import { FormattedMessage } from 'react-intl';

// import { WalletOutlined } from '@ant-design/icons';
import { BsBoxArrowUp } from 'react-icons/bs';

const icons = { BsBoxArrowUp };

const withdraw = {
  id: 'group-withdraw',

  type: 'group',
  children: [
    {
      id: 'withdraw',
      title: <FormattedMessage id="withdraw" />,
      type: 'item',
      icon: icons.BsBoxArrowUp,
      url: '/withdraw'
    }
  ]
};

export default withdraw;
