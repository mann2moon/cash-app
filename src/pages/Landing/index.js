import React from 'react';
import { Container } from '@mui/material';

import Header from 'layout/CommonLayout/Header';
import Footer from 'layout/MainLayout/Footer';

const Landing = () => {
  return (
    <>
      <Header />
      <Container sx={{ height: '100vh' }}></Container>
      <Footer />
    </>
  );
};

export default Landing;
