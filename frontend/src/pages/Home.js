import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const Home = () => {
  return (
    <Container maxWidth="sm" style={{ marginTop: '2rem', textAlign: 'center' }}>
      <Typography variant="h2" gutterBottom>
        Welcome to TripSage
      </Typography>
      <Typography variant="h5" gutterBottom>
        Plan your next adventure with ease
      </Typography>
      <Button variant="contained" color="primary" component={RouterLink} to="/register">
        Get Started
      </Button>
    </Container>
  );
};

export default Home;