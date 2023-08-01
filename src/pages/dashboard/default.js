import { useState } from 'react';

// material-ui
import { Box, Button, Grid, Stack, Typography, CardContent, Select, MenuItem, TextField, Fab } from '@mui/material';

// project import
import MainCard from 'components/MainCard';
import AnalyticEcommerce from 'components/cards/statistics/AnalyticEcommerce';
import IncomeAreaChart from 'sections/dashboard/default/IncomeAreaChart';
import ReportAreaChart from 'sections/dashboard/default/ReportAreaChart';
import OrdersTable from 'sections/dashboard/default/OrdersTable';

import { CurrencyBitcoin } from '@mui/icons-material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEthereum } from '@fortawesome/free-brands-svg-icons';
import { faLitecoinSign } from '@fortawesome/free-solid-svg-icons';
import AnimateButton from 'components/@extended/AnimateButton';
import { BankOutlined } from '@ant-design/icons';
import { useTheme } from '@emotion/react';
import { FormattedMessage } from 'react-intl';
// assets

// ==============================|| DASHBOARD - DEFAULT ||============================== //

const DashboardDefault = () => {
  const theme = useTheme();
  const [value, setValue] = useState({
    currencyCoin: '',
    paymentMethod: ''
  });

  // useEffect(() => {
  //   setValue({
  //     currencyCoin: ''
  //   });
  // });

  const [slot, setSlot] = useState('week');

  const handleCurrencyCoinChange = (e) => {
    setValue({ ...value, currencyCoin: e.target.value });
  };

  const handlePaymentMethodChange = (e) => {
    setValue({ ...value, paymentMethod: e.target.value });
  };

  return (
    <Grid container rowSpacing={4.5} columnSpacing={2.75}>
      <Grid item xs={12} sx={{ mb: -2.25 }}></Grid>
      <Grid item xs={12} md={3} lg={3}>
        <Grid item md={12} sx={{ display: { sm: 'none', md: 'block', lg: 'none' } }} />

        <Grid item xs={12} md={12} lg={12}>
          <Grid container alignItems="center" justifyContent="space-between">
            <Grid item>
              <Typography variant="h5">
                {' '}
                <FormattedMessage id="analytics-report" />
              </Typography>
            </Grid>
          </Grid>
          <MainCard sx={{ mt: 2 }}>
            <Typography variant="h4" sx={{ display: 'flex' }}>
              <Typography sx={{ marginTop: '2px', color: '#6f77d0' }}>
                <CurrencyBitcoin />
              </Typography>
              Bitcoin(24h)
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={4} sm={4} md={4} lg={5} sx={{ textAlign: 'center', marginY: 'auto' }}>
                <Typography variant="h6">USD 1254.36 </Typography>
              </Grid>
              <Grid item xs={4} sm={4} md={4} lg={3} sx={{ textAlign: 'center', marginY: 'auto' }}>
                <Typography>+ 06%</Typography>
              </Grid>
              <Grid item xs={4} sm={4} md={4} lg={4}>
                <ReportAreaChart height={100} />
              </Grid>
            </Grid>
          </MainCard>
          <MainCard sx={{ mt: 2 }}>
            <Typography variant="h4" sx={{ display: 'flex' }}>
              <FontAwesomeIcon icon={faEthereum} style={{ marginTop: '2px', color: '#6f77d0', marginRight: '4px' }} />
              Ethereum(24h)
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={4} sm={4} md={4} lg={5} sx={{ textAlign: 'center', marginY: 'auto' }}>
                <Typography variant="h6">USD 1254.36 </Typography>
              </Grid>
              <Grid item xs={4} sm={4} md={4} lg={3} sx={{ textAlign: 'center', marginY: 'auto' }}>
                <Typography>- 06%</Typography>
              </Grid>
              <Grid item xs={4} sm={4} md={4} lg={4}>
                <ReportAreaChart height={100} />
              </Grid>
            </Grid>
          </MainCard>
          <MainCard sx={{ mt: 2 }}>
            <Typography variant="h4" sx={{ display: 'flex' }}>
              <FontAwesomeIcon icon={faLitecoinSign} style={{ marginTop: '2px', color: '#6f77d0', marginRight: '4px' }} />
              Litecoin(24h)
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={4} sm={4} md={4} lg={5} sx={{ textAlign: 'center', marginY: 'auto' }}>
                <Typography variant="h6">USD 1254.36 </Typography>
              </Grid>
              <Grid item xs={4} sm={4} md={4} lg={3} sx={{ textAlign: 'center', marginY: 'auto' }}>
                <Typography> 06%</Typography>
              </Grid>
              <Grid item xs={4} sm={4} md={4} lg={4}>
                <ReportAreaChart height={100} />
              </Grid>
            </Grid>
          </MainCard>
        </Grid>
      </Grid>
      <Grid item xs={12} md={6} lg={6}>
        <Grid item xs={12} md={12} lg={12} sx={{ mb: 3 }}>
          <MainCard title={<FormattedMessage id="exchange" />}>
            <CardContent>
              <Stack
                direction={{
                  base: 'column',
                  xs: 'column',
                  sm: 'column',
                  md: 'column',
                  lg: 'row',
                  xl: 'row'
                }}
                spacing={2}
              >
                <Stack direction="column" spacing={1} sx={{ width: '100%' }}>
                  <Typography variant="h5">
                    <FormattedMessage id="currency" />
                  </Typography>
                  <Stack direction="row">
                    <Typography
                      variant="h4"
                      sx={{
                        display: 'flex',
                        marginY: 'auto',
                        border: `1px solid ${theme.palette.grey[300]}`,
                        borderRadius: '4px'
                      }}
                    >
                      <FontAwesomeIcon icon={faLitecoinSign} style={{ padding: '9.5px', color: '#6f77d0' }} />
                    </Typography>
                    <Select
                      value={value.currencyCoin}
                      onChange={handleCurrencyCoinChange}
                      displayEmpty
                      inputProps={{ 'aria-label': 'Without label' }}
                      sx={{ width: '100%' }}
                    >
                      <MenuItem value="" sx={{ color: 'text.secondary' }}>
                        Select
                      </MenuItem>
                      <MenuItem value="litecoin">Litecoin</MenuItem>
                      <MenuItem value="bitcoin">Bitcoin</MenuItem>
                      <MenuItem value="ethereum">Ethereum</MenuItem>
                    </Select>
                  </Stack>
                </Stack>
                <Stack direction="column" spacing={1} sx={{ width: '100%' }}>
                  <Typography variant="h5">
                    <FormattedMessage id="payment-method" />
                  </Typography>
                  <Stack direction="row">
                    <Typography
                      variant="h4"
                      sx={{
                        display: 'flex',
                        marginY: 'auto',
                        border: `1px solid ${theme.palette.grey[300]}`,
                        borderRadius: '4px'
                      }}
                    >
                      <BankOutlined style={{ padding: '9.5px', color: '#6f77d0' }} />
                    </Typography>
                    <Select
                      value={value.paymentMethod}
                      onChange={handlePaymentMethodChange}
                      displayEmpty
                      inputProps={{ 'aria-label': 'Without label' }}
                      sx={{ width: '100%' }}
                    >
                      <MenuItem value="" sx={{ color: 'text.secondary' }}>
                        Select
                      </MenuItem>
                      <MenuItem value="bank">Bank of America *******5264</MenuItem>
                      <MenuItem value="master">Master Card *******2314</MenuItem>
                    </Select>
                  </Stack>
                </Stack>
                <Stack direction="column" spacing={1} sx={{ width: '100%' }}>
                  <Typography variant="h5">
                    <FormattedMessage id="enter-your-amount" />{' '}
                  </Typography>
                  <Stack direction="row" sx={{ width: '100%' }}>
                    <TextField placeholder="0.0214LTC" id="ltc-change" sx={{ width: '100%' }} />
                    <TextField placeholder="125.00 USD" id="usd-change" sx={{ width: '100%' }} />
                  </Stack>
                </Stack>
              </Stack>
              <Stack direction="row" justifyContent="space-between" sx={{ mt: 3 }}>
                <Typography variant="h6" sx={{ marginY: 'auto' }}>
                  $49750 remaining
                </Typography>
                <AnimateButton>
                  <Fab variant="extended" color="primary" sx={{ width: '100%', mt: 2 }}>
                    <FormattedMessage id="exchange-now" /> Exchange Now
                  </Fab>
                </AnimateButton>
              </Stack>
            </CardContent>
          </MainCard>
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
          <Grid container alignItems="center" justifyContent="space-between">
            <Grid item>
              <Typography variant="h5">254856 USD</Typography>
              <Typography variant="h6" sx={{ color: '#34C38F' }}>
                125648 USD (20%)
              </Typography>
            </Grid>
            <Grid item>
              <Stack direction="row" alignItems="center" spacing={0}>
                <Button
                  size="small"
                  onClick={() => setSlot('month')}
                  color={slot === 'month' ? 'primary' : 'secondary'}
                  variant={slot === 'month' ? 'outlined' : 'text'}
                >
                  Month
                </Button>
                <Button
                  size="small"
                  onClick={() => setSlot('week')}
                  color={slot === 'week' ? 'primary' : 'secondary'}
                  variant={slot === 'week' ? 'outlined' : 'text'}
                >
                  Week
                </Button>
              </Stack>
            </Grid>
          </Grid>
          <MainCard content={false} sx={{ mt: 1.5 }}>
            <Box sx={{ pt: 1, pr: 2 }}>
              <IncomeAreaChart slot={slot} />
            </Box>
          </MainCard>
        </Grid>
        <Grid container spacing={4} sx={{ mt: 2 }}>
          <Grid item xs={12} sm={6} md={6} lg={4}>
            <AnalyticEcommerce title="24hr Volume" count="$1236548.325" percentage={59.3} />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={4}>
            <AnalyticEcommerce title="Market Cap" count="19B USD" percentage={70.5} />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={4}>
            <AnalyticEcommerce title="Circulating" count="29.4M BTC" percentage={27.4} isLoss color="warning" />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={4}>
            <AnalyticEcommerce title="All Time High" count="19.783.06 USD" percentage={48.4} isLoss color="warning" />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={4}>
            <AnalyticEcommerce title="Typical hold" count="88 days" percentage={55.4} />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={4}>
            <AnalyticEcommerce title="Trading activity" count="70% buy" percentage={60.4} isLoss color="warning" />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} md={3} lg={3}>
        <MainCard sx={{ mt: 5 }}>
          <Stack direction="row" spacing={3} justifyContent="space-between">
            <Typography variant="h4" sx={{ display: 'flex', marginY: 'auto' }}>
              <CurrencyBitcoin sx={{ color: '#6f77d0', marginTop: '2px' }} />
              Bitcoin
            </Typography>
            <Stack direction="column">
              <Typography>0.000242 BTC</Typography>
              <Typography sx={{ color: '#6f77d0' }}>0.125 USD</Typography>
            </Stack>
          </Stack>
        </MainCard>
        <MainCard sx={{ mt: 5 }}>
          <Stack direction="row" spacing={2} justifyContent="space-between">
            <Typography variant="h4" sx={{ display: 'flex', marginY: 'auto' }}>
              <FontAwesomeIcon icon={faEthereum} style={{ marginTop: '2px', color: '#6f77d0', marginRight: '4px' }} />
              Ethereum
            </Typography>
            <Stack direction="column">
              <Typography>0.000242 Eth</Typography>
              <Typography sx={{ color: '#6f77d0' }}>0.125 USD</Typography>
            </Stack>
          </Stack>
        </MainCard>
        <MainCard sx={{ mt: 5 }}>
          <Stack direction="row" spacing={2} justifyContent="space-between">
            <Typography variant="h4" sx={{ marginY: 'auto' }}>
              <FontAwesomeIcon icon={faLitecoinSign} style={{ marginTop: '2px', color: '#6f77d0', marginRight: '4px' }} />
              Litecoin
            </Typography>
            <Stack direction="column">
              <Typography>0.000242 LTC</Typography>
              <Typography sx={{ color: '#6f77d0' }}>0.125 USD</Typography>
            </Stack>
          </Stack>
        </MainCard>
        <MainCard title={<FormattedMessage id="wallet" />} content={false} sx={{ '& .MuiCardHeader-root': { p: 1.75 }, mt: 5 }}>
          <CardContent>
            <Typography variant="h6" sx={{ color: '#6f77d0' }}>
              Available LTC
            </Typography>
            <Typography variant="h4">0.0230145 LTC</Typography>
            <Stack direction="row" justifyContent="space-between" sx={{ mt: 3 }}>
              <Stack direction="column">
                <Typography variant="h6" sx={{ color: '#6f77d0' }}>
                  Buy this month
                </Typography>
                <Typography variant="h4">3.0215485 LTC</Typography>
              </Stack>
              <Stack direction="column">
                <Typography variant="h6" sx={{ color: '#6f77d0' }}>
                  Buy this month
                </Typography>
                <Typography variant="h4">3.0215485 LTC</Typography>
              </Stack>
            </Stack>
            <AnimateButton>
              <Button variant="contained" color="warning" sx={{ width: '100%', mt: 2 }}>
                <FormattedMessage id="sell" />
              </Button>
            </AnimateButton>
            <AnimateButton>
              <Button variant="contained" color="success" sx={{ width: '100%', mt: 2 }}>
                <FormattedMessage id="buy" />
              </Button>
            </AnimateButton>
          </CardContent>
        </MainCard>
      </Grid>

      <Grid item xs={12} md={12} lg={12}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <Typography variant="h5">
              <FormattedMessage id="transaction" />{' '}
            </Typography>
          </Grid>
          <Grid item />
        </Grid>
        <MainCard sx={{ mt: 2 }} content={false}>
          <OrdersTable />
        </MainCard>
      </Grid>
    </Grid>
  );
};

export default DashboardDefault;
