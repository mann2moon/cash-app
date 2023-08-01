import React from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';

// material-ui
import {
  Button,
  Checkbox,
  FormControlLabel,
  FormHelperText,
  Grid,
  Link,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  Typography,
  Tab,
  Box
} from '@mui/material';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

// third party
import * as Yup from 'yup';
import { Formik } from 'formik';

// project import
import useAuth from 'hooks/useAuth';
import useScriptRef from 'hooks/useScriptRef';
import IconButton from 'components/@extended/IconButton';
import AnimateButton from 'components/@extended/AnimateButton';

// assets
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
import useConfig from 'hooks/useConfig';
import { FormattedMessage } from 'react-intl';

// ============================|| FIREBASE - LOGIN ||============================ //

const AuthLogin = () => {
  const [checked, setChecked] = React.useState(false);
  const [capsWarning, setCapsWarning] = React.useState(false);

  const navigate = useNavigate();
  const { isLoggedIn } = useAuth();
  const [tabValue, setTabValue] = React.useState('1');
  const { mode } = useConfig();
  const scriptedRef = useScriptRef();

  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const onKeyDown = (keyEvent) => {
    if (keyEvent.getModifierState('CapsLock')) {
      setCapsWarning(true);
    } else {
      setCapsWarning(false);
    }
  };

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <>
      <Formik
        initialValues={{
          email: 'litecoin@gmail.com',
          password: '123456',
          phoneNumber: '+1 202-555-0115',
          submit: null
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string()
            .email(<FormattedMessage id="must be a valid email" />)
            .max(255)
            .required(<FormattedMessage id="email is required" />),
          password: Yup.string()
            .max(255)
            .required(<FormattedMessage id="password is required" />),
          phoneNumber: Yup.string().required(<FormattedMessage id="phone number is required" />)
        })}
        onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
          try {
            // await firebaseEmailPasswordSignIn(values.email, values.password, values.phoneNumber).then(
            //   () => {
            //     navigate('/verification-code');
            //   },
            //   (err) => {
            //     setStatus({ success: false });
            //     setErrors({ submit: err.message });
            //     setSubmitting(false);
            //   }
            // );
            navigate('/code-verification');
          } catch (err) {
            console.error(err);
            if (scriptedRef.current) {
              setStatus({ success: false });
              setErrors({ submit: err.message });
              setSubmitting(false);
            }
          }
        }}
      >
        {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
          <form noValidate onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <TabContext value={tabValue}>
                <Box sx={{ margin: 'auto' }}>
                  <TabList onChange={handleTabChange} aria-label="lab API tabs example">
                    <Tab label={<FormattedMessage id="email" />} value="1" />
                    <Tab label={<FormattedMessage id="mobile" />} value="2" />
                  </TabList>
                </Box>
                <TabPanel value="1" sx={{ width: '100%', paddingRight: '0px' }}>
                  <Grid item xs={12}>
                    <Stack spacing={1}>
                      <InputLabel htmlFor="email-login">
                        <FormattedMessage id="email address" />
                      </InputLabel>
                      <OutlinedInput
                        id="email-login"
                        type="email"
                        value={values.email}
                        name="email"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        placeholder="Enter email address"
                        fullWidth
                        error={Boolean(touched.email && errors.email)}
                      />
                      {touched.email && errors.email && (
                        <FormHelperText error id="standard-weight-helper-text-email-login">
                          {errors.email}
                        </FormHelperText>
                      )}
                    </Stack>
                  </Grid>
                </TabPanel>
                <TabPanel value="2" sx={{ width: '100%', paddingRight: '0px' }}>
                  <Grid item xs={12}>
                    <Stack spacing={1}>
                      <InputLabel htmlFor="phone-number">
                        <FormattedMessage id="phone number" />
                      </InputLabel>
                      <PhoneInput
                        name="phoneNumber"
                        id="phone-number"
                        className={mode === 'dark' ? 'phone-dark-number' : 'phone-light-number'}
                        international
                        defaultCountry="US"
                        onBlur={handleBlur}
                        value={values.phoneNumber}
                        onChange={(value) => handleChange({ target: { name: 'phoneNumber', value } })}
                      />
                      {touched.phoneNumber && errors.phoneNumber && (
                        <FormHelperText error id="standard-weight-helper-text-email-login">
                          {errors.phoneNumber}
                        </FormHelperText>
                      )}
                    </Stack>
                  </Grid>
                </TabPanel>
              </TabContext>

              <Grid item xs={12}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="password-login">
                    <FormattedMessage id="password" />
                  </InputLabel>
                  <OutlinedInput
                    fullWidth
                    color={capsWarning ? 'warning' : 'primary'}
                    error={Boolean(touched.password && errors.password)}
                    id="-password-login"
                    type={showPassword ? 'text' : 'password'}
                    value={values.password}
                    name="password"
                    onBlur={(event) => {
                      setCapsWarning(false);
                      handleBlur(event);
                    }}
                    onKeyDown={onKeyDown}
                    onChange={handleChange}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                          color="secondary"
                        >
                          {showPassword ? <EyeOutlined /> : <EyeInvisibleOutlined />}
                        </IconButton>
                      </InputAdornment>
                    }
                    placeholder="Enter password"
                  />
                  {capsWarning && (
                    <Typography variant="caption" sx={{ color: 'warning.main' }} id="warning-helper-text-password-login">
                      <FormattedMessage id="caps lock on!" />
                    </Typography>
                  )}
                  {touched.password && errors.password && (
                    <FormHelperText error id="standard-weight-helper-text-password-login">
                      {errors.password}
                    </FormHelperText>
                  )}
                </Stack>
              </Grid>

              <Grid item xs={12} sx={{ mt: -1 }}>
                <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={checked}
                        onChange={(event) => setChecked(event.target.checked)}
                        name="checked"
                        color="primary"
                        size="small"
                      />
                    }
                    label={
                      <Typography variant="h6">
                        <FormattedMessage id="keep me sign in" />{' '}
                      </Typography>
                    }
                  />
                  <Link
                    variant="h6"
                    component={RouterLink}
                    to={isLoggedIn ? '/auth/forgot-password' : '/forgot-password'}
                    color="text.primary"
                  >
                    <FormattedMessage id="forgot password?" />
                  </Link>
                </Stack>
              </Grid>
              {errors.submit && (
                <Grid item xs={12}>
                  <FormHelperText error>{errors.submit}</FormHelperText>
                </Grid>
              )}
              <Grid item xs={12}>
                <AnimateButton>
                  <Button disableElevation disabled={isSubmitting} fullWidth size="large" type="submit" variant="contained" color="primary">
                    <FormattedMessage id="login" />
                  </Button>
                </AnimateButton>
              </Grid>
            </Grid>
          </form>
        )}
      </Formik>
    </>
  );
};

export default AuthLogin;
