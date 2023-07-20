import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Box, Button, Dialog, Grid, Stack, Typography, useMediaQuery } from '@mui/material';

// project imports
import MainCard from 'components/MainCard';

// third-party
import { Chance } from 'chance';

// assets
import completed from 'assets/images/e-commerce/completed.png';
import checklist from 'assets/images/e-commerce/checklist.png';

const chance = new Chance();

// ==============================|| CHECKOUT CART - DISCOUNT COUPON CODE ||============================== //

const OrderComplete = ({ open }) => {
  const theme = useTheme();
  const matchDownMD = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <>
      <Dialog open={open} fullScreen>
        {open && (
          <MainCard>
            <Grid container justifyContent="center" alignItems="center" sx={{ minHeight: '100vh', p: { xs: 2.5, md: 'auto' } }}>
              <Grid item>
                <Stack spacing={2} alignItems="center">
                  <Box sx={{ position: 'relative' }}>
                    <img src={completed} alt="Order Complete" style={{ width: 400, maxHeight: 240 }} />
                    <img src={checklist} alt="checklist" style={{ position: 'absolute', left: 110, bottom: 20, height: 130, width: 180 }} />
                  </Box>
                  <Typography variant={matchDownMD ? 'h2' : 'h1'}>Thank you for Purchase!</Typography>
                  <Box sx={{ px: 2.5 }}>
                    <Typography align="center" color="textSecondary">
                      We will send a process notification, before it delivered.
                    </Typography>
                    <Typography align="center" color="textSecondary">
                      Your order id:{' '}
                      <Typography variant="subtitle1" component="span" color="primary">
                        {chance.guid()}
                      </Typography>
                    </Typography>
                  </Box>
                  <Typography variant="h5" sx={{ py: 3 }}>
                    (219) 404-5468
                  </Typography>
                  <Stack direction="row" justifyContent="center" spacing={3}>
                    <Button component={Link} to="/apps/e-commerce/products" variant="outlined" color="secondary">
                      Continue Shopping
                    </Button>
                    <Button component={Link} to="/apps/e-commerce/products" variant="contained" color="primary">
                      Download Invoice
                    </Button>
                  </Stack>
                </Stack>
              </Grid>
            </Grid>
          </MainCard>
        )}
      </Dialog>
    </>
  );
};

OrderComplete.propTypes = {
  open: PropTypes.bool
};

export default OrderComplete;
