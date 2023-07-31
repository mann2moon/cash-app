import React, { useState } from 'react';

import {
  Grid,
  Typography,
  Stack,
  Select,
  MenuItem,
  TextField,
  Button,
  IconButton,
  Card,
  Dialog,
  DialogContent,
  FormControl
} from '@mui/material';
import AnimateButton from 'components/@extended/AnimateButton';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ClearIcon from '@mui/icons-material/Clear';

import useConfig from 'hooks/useConfig';
import Search from 'components/Search';
import { Network } from 'data/network';
import { DepositToken } from 'data/depositToken';

const Deposit = () => {
  const [withDrawCoin, setWithDrawCoin] = useState({
    name: '',
    value: '',
    icon: ''
  });
  const [withDrawNetwork, setWithDrawNetwork] = useState('');
  const { mode } = useConfig();
  const [token, setToken] = useState([]);

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleWithDrawCoinChange = ({ name, value, icon }) => {
    setWithDrawCoin({ name: name, value: value, icon: icon });
    handleClose();
  };

  const handleNetWork = (e) => {
    setWithDrawNetwork(e.target.value);
    setWithDrawCoin({ name: '', value: '', icon: '' });
    setToken(DepositToken.filter((obj) => obj.network === e.target.value)[0]?.tokens);
  };

  return (
    <>
      <Typography variant="h3">Deposit Crypto</Typography>
      <Grid container sx={{ mt: 5 }}>
        <Grid item lg={4} md={4} sm={12} xs={12}></Grid>
        <Grid item lg={4} md={4} sm={12} xs={12}>
          <Card sx={{ padding: '20px' }}>
            <Stack direction="column" sx={{ mt: 2 }}>
              <Stack direction="column">
                <Typography sx={{ color: mode === 'dark' ? '#FFF' : '#8c8c8c' }}>Select Coin</Typography>
                <Button
                  onClick={handleOpen}
                  sx={{
                    width: '100%',
                    justifyContent: 'space-between',
                    border: mode === 'dark' ? '1px solid #595959' : '1px solid #d9d9d9',
                    color: mode === 'dark' ? '#FFF' : 'black',
                    ':hover': mode === 'dark' ? { backgroundColor: '#292929', color: '#FFF' } : { background: '#FFF', color: 'black' }
                  }}
                >
                  <Stack direction="row" sx={{ marginY: 'auto' }}>
                    <img src={withDrawCoin.icon} alt={withDrawCoin.name} />
                    <Typography variant="h6" sx={{ marginY: 'auto', marginLeft: '5px' }}>
                      {withDrawCoin.name}
                    </Typography>
                  </Stack>
                  <Stack direction="row" sx={{ marginY: 'auto' }}>
                    <ArrowDropDownIcon />
                  </Stack>
                </Button>
                <Dialog open={open} onClose={handleClose} sx={{ width: '100%', mx: 'auto' }}>
                  <DialogContent sx={{ width: { lg: '600px', md: '400px', sm: '300px', xs: '250px' }, overflowY: 'visible' }}>
                    <Stack direction="row" justifyContent="space-between" sx={{ mb: 3 }}>
                      <Typography sx={{ color: mode === 'dark' ? '#FFF' : 'black', ml: 2, marginY: 'auto' }} variant="h3">
                        Select Coin
                      </Typography>
                      <IconButton onClick={handleClose} aria-label="close">
                        <ClearIcon sx={{ marginY: 'auto' }} />
                      </IconButton>
                    </Stack>

                    <Search style={{ width: '100%', pl: 1, pr: { lg: 3, md: 3, sm: 2, xs: 2 } }} />

                    <Stack direction="column" sx={{ mt: 5 }}>
                      <Typography variant="h6" color="secondary" sx={{ ml: 2 }}>
                        Available for Withdrawal
                      </Typography>
                      <FormControl sx={{ mt: 2, width: '100%' }}>
                        {token?.map((item, index) => (
                          <MenuItem
                            value={item.id}
                            key={index}
                            onClick={() => handleWithDrawCoinChange({ name: item.name, value: item.value, icon: item.icon })}
                          >
                            <Stack direction="row" justifyContent="space-between" sx={{ width: '100%' }}>
                              <Stack direction="row" gap={2}>
                                <img src={item.icon} alt={item.id} />
                                <Stack direction="column">
                                  <Typography variant="h6">{item.name}</Typography>
                                  <Typography variant="h6" color="secondary">
                                    {item.label}
                                  </Typography>
                                </Stack>
                              </Stack>

                              <Stack direction="column" style={{ textAlign: 'right' }}>
                                <Typography variant="h6">{item.tokenValue}</Typography>
                                <Typography variant="h6" color="secondary">
                                  {item.value}
                                </Typography>
                              </Stack>
                            </Stack>
                          </MenuItem>
                        ))}
                      </FormControl>
                    </Stack>
                  </DialogContent>
                </Dialog>
              </Stack>
              <Stack direction="column" sx={{ mt: 2 }}>
                <Typography variant="h6" color="secondary">
                  Network
                </Typography>
                <Select
                  displayEmpty
                  sx={{ width: '100%' }}
                  inputProps={{ 'aria-label': 'Without label' }}
                  value={withDrawNetwork}
                  onChange={handleNetWork}
                >
                  <MenuItem value="" sx={{ color: 'text.secondary' }}>
                    Select
                  </MenuItem>
                  {Network.map((item, index) => (
                    <MenuItem key={index} value={item.id}>
                      <Stack direction="row">
                        <img src={item.icon} alt={item.id} style={{ marginRight: '2px', width: '20px', height: '20px' }} />
                        {item.label}
                      </Stack>
                    </MenuItem>
                  ))}
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
              <Stack direction="row" justifyContent="center" sx={{ width: '100%', mt: 2 }}>
                <AnimateButton>
                  <Button color="primary" variant="contained" sx={{ mt: 2 }} onClick={() => confirm('Are you sure?')}>
                    Deposit
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

export default Deposit;
