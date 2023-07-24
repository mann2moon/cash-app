import React, { useState } from 'react';

import { Typography, CardContent, Grid, Stack, TextField, Select, MenuItem, Fab } from '@mui/material';
import MainCard from 'components/MainCard';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTheme } from '@emotion/react';
import { BankOutlined } from '@ant-design/icons';
import AnimateButton from 'components/@extended/AnimateButton';
import { faLitecoinSign } from '@fortawesome/free-solid-svg-icons';

const Account = () => {
  const theme = useTheme();

  const [withDrawBankType, setWithDrawBankType] = useState('');
  const [depositBankType, setDepositBankType] = useState('');
  const [depositCoin, setDepositCoin] = useState('');
  const [withDrawCoin, setWithDrawCoin] = useState('');

  const handleBankChange = (e) => {
    setWithDrawBankType(e.target.value);
  };

  const handleDepositChange = (e) => {
    setDepositBankType(e.target.value);
  };

  const handleDepositCoinChange = (e) => {
    setDepositCoin(e.target.value);
  };

  const handleWithDrawCoinChange = (e) => {
    setWithDrawCoin(e.target.value);
  };

  return (
    <>
      <Grid container rowSpacing={4.5} columnSpacing={2.75}>
        <Grid item xs={12} sx={{ mb: -2.25 }}></Grid>
        <Grid item xs={12} md={4} lg={4}>
          <MainCard title="Deposit">
            <CardContent>
              <Stack direction="column">
                <Stack direction="row">
                  <TextField placeholder="89.06 USD" id="deposite-money" sx={{ width: '100%' }} />
                  <TextField placeholder="1 LTC" id="deposite-coin" sx={{ width: '100%' }} />
                </Stack>
                <Stack direction="column" sx={{ mt: 2 }}>
                  <Typography>From</Typography>
                  <Stack direction="row" sx={{ mt: 1 }}>
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
                      value={depositBankType}
                      onChange={handleDepositChange}
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

                <Stack direction="column" sx={{ mt: 2 }}>
                  <Typography>To</Typography>
                  <Stack direction="row" sx={{ mt: 1 }}>
                    <Typography
                      variant="h4"
                      sx={{
                        display: 'flex',
                        marginY: 'auto',
                        border: `1px solid ${theme.palette.grey[300]}`,
                        borderRadius: '4px'
                      }}
                    >
                      <FontAwesomeIcon icon={faLitecoinSign} style={{ color: '#6f77d0', padding: '10px' }} />
                    </Typography>
                    <Select
                      value={depositCoin}
                      onChange={handleDepositCoinChange}
                      displayEmpty
                      inputProps={{ 'aria-label': 'Without label' }}
                      sx={{ width: '100%' }}
                    >
                      <MenuItem value="" sx={{ color: 'text.secondary' }}>
                        Select
                      </MenuItem>
                      <MenuItem value="litecoin">LiteCoin</MenuItem>
                      <MenuItem value="bitcoin">BitCoin</MenuItem>
                      <MenuItem value="ethereum">Ethereum</MenuItem>
                    </Select>
                  </Stack>
                </Stack>

                <AnimateButton>
                  <Fab variant="extended" color="success" sx={{ width: '100%', mt: 4 }}>
                    Deposit
                  </Fab>
                </AnimateButton>
              </Stack>
            </CardContent>
          </MainCard>
        </Grid>
        {/* <Grid item xs={12} md={4} lg={4}>
          <MainCard title="Wallet">
            <CardContent>
              <Stack direction="column">
                <TextField placeholder="5000 USD" id="wallet-money" sx={{ width: '100%' }} />
              </Stack>
            </CardContent>
          </MainCard>
        </Grid> */}
        <Grid item xs={12} md={4} lg={4}>
          <MainCard title="Withdraw">
            <CardContent>
              <Stack direction="column">
                <Stack direction="row">
                  <TextField placeholder="1 LTC" id="widthdraw-money" sx={{ width: '100%' }} />
                  <TextField placeholder="89.06 USD" id="widthdraw-coin" sx={{ width: '100%' }} />
                </Stack>
              </Stack>
              <Stack direction="column" sx={{ mt: 2 }}>
                <Typography>From</Typography>
                <Stack direction="row" sx={{ mt: 1 }}>
                  <Typography
                    variant="h4"
                    sx={{
                      display: 'flex',
                      marginY: 'auto',
                      border: `1px solid ${theme.palette.grey[300]}`,
                      borderRadius: '4px'
                    }}
                  >
                    <FontAwesomeIcon icon={faLitecoinSign} style={{ color: '#6f77d0', padding: '10px' }} />
                  </Typography>
                  <Select
                    value={withDrawCoin}
                    onChange={handleWithDrawCoinChange}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                    sx={{ width: '100%' }}
                  >
                    <MenuItem value="" sx={{ color: 'text.secondary' }}>
                      Select
                    </MenuItem>
                    <MenuItem value="litecoin">LiteCoin</MenuItem>
                    <MenuItem value="bitcoin">BitCoin</MenuItem>
                    <MenuItem value="ethereum">Ethereum</MenuItem>
                  </Select>
                </Stack>
              </Stack>

              <Stack direction="column" sx={{ mt: 2 }}>
                <Typography>To</Typography>
                <Stack direction="row" sx={{ mt: 1 }}>
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
                    value={withDrawBankType}
                    onChange={handleBankChange}
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

              <AnimateButton>
                <Fab variant="extended" color="info" sx={{ width: '100%', mt: 4 }}>
                  WithDraw
                </Fab>
              </AnimateButton>
            </CardContent>
          </MainCard>
        </Grid>
      </Grid>
    </>
  );
};

export default Account;
