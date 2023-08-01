import React from 'react';
import { useNavigate } from 'react-router-dom';

// material-ui
import { Grid, Stack, Typography, Link } from '@mui/material';

// project import
import AuthWrapper from 'sections/auth/AuthWrapper';
import AuthCodeVerification from 'sections/auth/auth-forms/AuthCodeVerification';

import { LeftOutlined } from '@ant-design/icons';
import { FormattedMessage } from 'react-intl';

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
            <LeftOutlined /> <FormattedMessage id="back" />
          </Link>
        </Grid>
        <Grid item xs={12}>
          <Stack spacing={1}>
            <Typography variant="h3">
              <FormattedMessage id="enter-verification-code" />
            </Typography>
            <Typography color="secondary">
              <FormattedMessage id="we-send-you-on-mail" />{' '}
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <Typography>
            <FormattedMessage id="we`ve send you code on jone. " />
            ****@company.com
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <AuthCodeVerification />
        </Grid>
      </Grid>
    </AuthWrapper>
  );
};

export default CodeVerification;
