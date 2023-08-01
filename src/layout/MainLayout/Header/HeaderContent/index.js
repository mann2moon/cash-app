// import { useMemo } from 'react';

// material-ui
import { Box, useMediaQuery } from '@mui/material';

// project import
import useConfig from 'hooks/useConfig';
import Search from './Search';
// import Message from './Message';
import Profile from './Profile';
// import Notification from './Notification';
import Customization from './Customization';
import MobileSection from './MobileSection';
import { useMemo } from 'react';
import Localization from './Localization';
// import MegaMenuSection from './MegaMenuSection';

// ==============================|| HEADER - CONTENT ||============================== //

const HeaderContent = () => {
  const { i18n } = useConfig();

  const matchesXs = useMediaQuery((theme) => theme.breakpoints.down('md'));
  const localization = useMemo(() => <Localization />, [i18n]);
  return (
    <>
      {!matchesXs && <Search />}
      {!matchesXs && localization}
      {matchesXs && <Box sx={{ width: '100%', ml: 1 }} />}

      {/* <Notification /> */}
      {/* <Message /> */}
      <Customization />
      {!matchesXs && <Profile />}
      {matchesXs && <MobileSection />}
    </>
  );
};

export default HeaderContent;
