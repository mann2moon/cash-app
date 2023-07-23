import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Grid, InputLabel, Stack, Typography, FormHelperText, OutlinedInput, Button, Link } from '@mui/material';

import AuthWrapper from 'sections/auth/AuthWrapper';
import { Formik } from 'formik';
import * as Yup from 'yup';

import AnimateButton from 'components/@extended/AnimateButton';
import { LeftOutlined } from '@ant-design/icons';
// import useAuth from 'hooks/useAuth';

const Verification = () => {
  const navigate = useNavigate();
  // const { isLoggedIn } = useAuth();

  const goBack = () => {
    navigate(-1);
  };

  const initialValues = {
    verificationCode: '1234'
  };
  const validationSchema = Yup.object().shape({
    verificationCode: Yup.number().required('Your code is required.')
  });

  const handleOnSubmit = async (values, { setErrors, setStatus, setSubmitting }) => {
    try {
      // isLoggedIn = true;
      navigate('/dashboard');
    } catch (err) {
      console.error(err);
      if (scriptedRef.current) {
        setStatus({ success: false });
        setErrors({ submit: err.message });
        setSubmitting(false);
      }
    }
  };

  return (
    <AuthWrapper>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Link variant="h6" component="button" onClick={goBack} color="text.primary">
            <LeftOutlined /> Back
          </Link>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h3">Verification Code</Typography>
        </Grid>
        <Grid item xs={12}>
          <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleOnSubmit}>
            {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
              <form noValidate onSubmit={handleSubmit}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="verification-code">Your Code*</InputLabel>
                  <OutlinedInput
                    id="verification-code"
                    type="text"
                    value={values.verificationCode}
                    name="verificationCode"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="Enter Your Code"
                    fullWidth
                    error={Boolean(touched.verificationCode && errors.verificationCode)}
                  />
                  {touched.verificationCode && errors.verificationCode && (
                    <FormHelperText error id="standard-weight-helper-text-code-verify">
                      {errors.verificationCode}
                    </FormHelperText>
                  )}
                </Stack>
                <Grid item xs={12} sx={{ mt: 2 }}>
                  <AnimateButton>
                    <Button
                      disableElevation
                      disabled={isSubmitting}
                      fullWidth
                      size="large"
                      type="submit"
                      variant="contained"
                      color="primary"
                    >
                      Verify
                    </Button>
                  </AnimateButton>
                </Grid>
                <Grid item xs={12} sx={{ mt: 2 }}>
                  <Typography variant="span">You dont recommended to save password to browsers!</Typography>
                </Grid>
              </form>
            )}
          </Formik>
        </Grid>
      </Grid>
    </AuthWrapper>
  );
};

export default Verification;
