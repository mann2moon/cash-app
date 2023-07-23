import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// material-ui
import { ButtonBase } from '@mui/material';

// project import
import LogoMain from './LogoMain';
// import LogoIcon from './LogoIcon';
import config from 'config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLitecoinSign } from '@fortawesome/free-solid-svg-icons';

// ==============================|| MAIN LOGO ||============================== //

const LogoSection = ({ reverse, isIcon, sx, to }) => (
  <ButtonBase disableRipple component={Link} to={!to ? config.defaultPath : to} sx={sx}>
    {isIcon ? <FontAwesomeIcon icon={faLitecoinSign} style={{ color: '#6f77d0', fontSize: '25px' }} /> : <LogoMain reverse={reverse} />}
  </ButtonBase>
);

LogoSection.propTypes = {
  reverse: PropTypes.bool,
  isIcon: PropTypes.bool,
  sx: PropTypes.object,
  to: PropTypes.string
};

export default LogoSection;
