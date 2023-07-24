import React from 'react';
import { Stack, Button } from '@mui/material';
import { useNavigate } from 'react-router';

const Auth = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/login');
  };

  const handleSignUp = () => {
    navigate('/register');
  };

  return (
    <>
      <Stack direction="row" spacing={2} sx={{ marginLeft: 'auto' }}>
        <Button variant="contained" color="success" onClick={handleLogin}>
          Login
        </Button>
        <Button variant="contained" color="primary" onClick={handleSignUp}>
          Sign Up
        </Button>
      </Stack>
    </>
  );
};

export default Auth;
