import React, { useState } from 'react';

import { Grid, Typography, Stack, Select, MenuItem, TextField, Button, Card } from '@mui/material';
import AnimateButton from 'components/@extended/AnimateButton';

const Withdraw = () => {
  const [withDrawCoin, setWithDrawCoin] = useState('');
  // const [withDrawNetwork, setWithDrawNetwork] = useState('');

  const handleWithDrawCoinChange = (e) => {
    setWithDrawCoin(e.target.value);
  };

  return (
    <>
      <Typography variant="h3">Withdraw Crypto</Typography>
      <Grid container sx={{ mt: 5 }}>
        <Grid item lg={4} md={4} sm={12} xs={12}></Grid>
        <Grid item lg={4} md={4} sm={12} xs={12}>
          <Card sx={{ padding: '20px' }}>
            <Stack direction="column" sx={{ mt: 2 }}>
              <Stack direction="column">
                <Typography>Select Coin</Typography>
                <Select
                  value={withDrawCoin}
                  onChange={handleWithDrawCoinChange}
                  displayEmpty
                  sx={{ width: '100%' }}
                  inputProps={{ 'aria-label': 'Without label' }}
                >
                  <MenuItem value="" sx={{ color: 'text.secondary' }}>
                    Select
                  </MenuItem>
                  <MenuItem value="litecoin">
                    <Stack direction="row" justifyContent="space-between" sx={{ width: '100%' }}>
                      <Stack direction="column">
                        <Typography variant="h6">LTC</Typography>
                        <Typography variant="h6" color="secondary">
                          Litecoin
                        </Typography>
                      </Stack>

                      <Stack direction="column" style={{ textAlign: 'right' }}>
                        <Typography variant="h6">10</Typography>
                        <Typography variant="h6" color="secondary">
                          $ 89
                        </Typography>
                      </Stack>
                    </Stack>
                  </MenuItem>
                  <MenuItem value="bitcoin">
                    <Stack direction="row" justifyContent="space-between" sx={{ width: '100%' }}>
                      <Stack direction="column">
                        <Typography variant="h6">BTC</Typography>
                        <Typography variant="h6" color="secondary">
                          Bitcoin
                        </Typography>
                      </Stack>

                      <Stack direction="column" style={{ textAlign: 'right' }}>
                        <Typography variant="h6">0.05</Typography>
                        <Typography variant="h6" color="secondary">
                          $ 1451.8
                        </Typography>
                      </Stack>
                    </Stack>
                  </MenuItem>
                  <MenuItem value="ethereum">
                    <Stack direction="row" justifyContent="space-between" sx={{ width: '100%' }}>
                      <Stack direction="column">
                        <Typography variant="h6">ETH</Typography>
                        <Typography variant="h6" color="secondary">
                          Ethereum
                        </Typography>
                      </Stack>

                      <Stack direction="column" style={{ textAlign: 'right' }}>
                        <Typography variant="h6">0.1</Typography>
                        <Typography variant="h6" color="secondary">
                          $ 184.1
                        </Typography>
                      </Stack>
                    </Stack>
                  </MenuItem>
                </Select>
              </Stack>
              <Stack direction="column" sx={{ mt: 2 }}>
                <Stack direction="column">
                  <Typography variant="h6" color="secondary">
                    Wallet Address
                  </Typography>
                  <TextField placeholder="wallet address" id="withdraw-address" />
                </Stack>
              </Stack>
              <Stack direction="column" sx={{ mt: 2 }}>
                <Typography variant="h6" color="secondary">
                  Network
                </Typography>
                <Select displayEmpty sx={{ width: '100%' }} inputProps={{ 'aria-label': 'Without label' }}>
                  <MenuItem value="" sx={{ color: 'text.secondary' }}>
                    Select
                  </MenuItem>
                  <MenuItem value="ethereum">Ethereum</MenuItem>
                  <MenuItem value="polygon">Polygon</MenuItem>
                  <MenuItem value="bnb chain">BNB Chain</MenuItem>
                </Select>
              </Stack>
              <Stack direction="column" sx={{ mt: 2 }}>
                <Stack direction="column">
                  <Typography variant="h6" color="secondary">
                    Amount
                  </Typography>
                  <TextField placeholder="amount" id="amount" />
                </Stack>
              </Stack>
              <Stack direction="row" justifyContent="space-between" sx={{ width: '100%', mt: 2 }}>
                <Stack direction="column">
                  <Typography variant="h6">Amount Received</Typography>
                  <Typography variant="h4">1.55 LTC</Typography>
                  <Typography color="secondary" variant="body2">
                    Fee: $ 0.8889189
                  </Typography>
                </Stack>
                <AnimateButton>
                  <Button color="success" variant="contained" sx={{ mt: 2 }} onClick={() => confirm('Are you sure?')}>
                    WithDraw
                  </Button>
                </AnimateButton>
              </Stack>
            </Stack>
          </Card>
        </Grid>
        <Grid item lg={4} md={4} sm={12} xs={12}></Grid>
      </Grid>
    </>
  );
};

export default Withdraw;
