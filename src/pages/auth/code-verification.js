import React from 'react';
import { useNavigate } from 'react-router-dom';

// material-ui
import { Grid, Stack, Typography, Link } from '@mui/material';

// project import
import AuthWrapper from 'sections/auth/AuthWrapper';
import AuthCodeVerification from 'sections/auth/auth-forms/AuthCodeVerification';

import { LeftOutlined } from '@ant-design/icons';

// ================================|| CODE VERIFICATION ||================================ //

const CodeVerification = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <AuthWrapper>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Link component="button" onClick={handleGoBack}>
            <LeftOutlined /> Back
          </Link>
        </Grid>
        <Grid item xs={12}>
          <Stack spacing={1}>
            <Typography variant="h3">Enter Verification Code</Typography>
            <Typography color="secondary">We send you on mail.</Typography>
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <Typography>We`ve send you code on jone. ****@company.com</Typography>
        </Grid>
        <Grid item xs={12}>
          <AuthCodeVerification />
        </Grid>
      </Grid>
    </AuthWrapper>
  );
};

export default CodeVerification;
