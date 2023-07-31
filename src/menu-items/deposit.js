import { FormattedMessage } from 'react-intl';

import { BsBoxArrowInDown } from 'react-icons/bs';
import { Divider } from '@mui/material';

const icons = { BsBoxArrowInDown };

const deposit = {
  id: 'group-deposit',

  type: 'group',
  title: <Divider />,
  children: [
    {
      id: 'deposit',
      title: <FormattedMessage id="deposit" />,
      type: 'item',
      icon: icons.BsBoxArrowInDown,
      url: '/deposit'
    }
  ]
};

export default deposit;
