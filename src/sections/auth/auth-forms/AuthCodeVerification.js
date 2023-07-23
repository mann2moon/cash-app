import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import { Button, Grid, Stack, Typography } from '@mui/material';

import OtpInput from 'react-otp-input-rc-17';

import AnimateButton from 'components/@extended/AnimateButton';
// import useAuth from 'hooks/useAuth';

// ============================|| STATIC - CODE VERIFICATION ||============================ //

const AuthCodeVerification = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const [otp, setOtp] = useState('4563');
  // let values = {
  //   verifyCode: otp,
  //   email: 'litecoin@gmail.com',
  //   phoneNumber: '+1 202-555-0115',
  //   password: '123456'
  // };
  // const { firebaseEmailPasswordSignIn } = useAuth();
  const borderColor = theme.palette.mode === 'dark' ? theme.palette.grey[200] : theme.palette.grey[300];

  const handleSubmit = async () => {
    // await firebaseEmailPasswordSignIn(values.email, values.password, values.phoneNumber, values.verifyCode);
    navigate('/dashboard');
  };
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <OtpInput
          value={otp}
          onChange={(otp) => setOtp(otp)}
          numInputs={4}
          containerStyle={{ justifyContent: 'space-between' }}
          inputStyle={{
            width: '100%',
            margin: '8px',
            padding: '10px',
            border: `1px solid ${borderColor}`,
            borderRadius: 4,
            ':hover': {
              borderColor: theme.palette.primary.main
            }
          }}
          focusStyle={{
            outline: 'none',
            boxShadow: theme.customShadows.primary,
            border: `1px solid ${theme.palette.primary.main}`
          }}
        />
      </Grid>
      <Grid item xs={12}>
        <AnimateButton>
          <Button disableElevation fullWidth size="large" type="submit" variant="contained" onClick={handleSubmit}>
            Continue
          </Button>
        </AnimateButton>
      </Grid>
      <Grid item xs={12}>
        <Stack direction="row" justifyContent="space-between" alignItems="baseline">
          <Typography>Did not receive the email? Check your spam filter, or</Typography>
          <Typography variant="body1" sx={{ minWidth: 85, ml: 2, textDecoration: 'none', cursor: 'pointer' }} color="primary">
            Resend code
          </Typography>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default AuthCodeVerification;
