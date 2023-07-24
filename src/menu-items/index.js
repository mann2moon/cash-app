// project import
import applications from './applications';
import dashboard from './dashboard';
import withdraw from './withdraw';
import deposit from './deposit';
import depositWithDrawHistory from './history';

// ==============================|| MENU ITEMS ||============================== //

const menuItems = {
  items: [dashboard, applications, withdraw, deposit, depositWithDrawHistory]
};

export default menuItems;
