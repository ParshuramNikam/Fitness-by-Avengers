import React from 'react';
import { Box, Typography } from '@mui/material';
import Logo from '../assets/images/Logo.png';

const Footer = () => (
  <Box mt="80px" bgcolor="#FFF3F4">
    <Box gap="20px" sx={{ alignItems: 'center', display: 'flex', justifyContent: 'center', alignContent: 'center' }} flexWrap="wrap" px="40px" pt="24px">
      <img src={Logo} alt="logo" style={{ width: '35px', height: '35px' }} />
      <Typography variant="h4" sx={{ fontSize: { lg: '28px', xs: '20px' } }}> Fitness by Avengers </Typography>
    </Box>
    <Typography variant="h5" sx={{ fontSize: { lg: '28px', xs: '20px' } }} mt="41px" textAlign="center" pb="40px">Made with ❤️ by Parshuram Nikam</Typography>
  </Box>
);

export default Footer;
