import React, { useState, useEffect } from 'react';
import { Container, Typography, Button, List, ListItem, ListItemText } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import axios from 'axios';

const Dashboard = () => {
  const [itineraries, setItineraries] = useState([]);

  useEffect(() => {
    const fetchItineraries = async () => {
      try {
        const token = localStorage.getItem('token'); // Assume token is stored in localStorage
        const response = await axios.get('http://localhost:5000/api/itineraries', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setItineraries(response.data);
      } catch (error) {
        console.error('Error fetching itineraries:', error);
      }
    };

    fetchItineraries();
  }, []);

  return (
    <Container maxWidth="md" style={{ marginTop: '2rem' }}>
      <Typography variant="h4" gutterBottom>
        Your Itineraries
      </Typography>
      <Button
        variant="contained"
        color="primary"
        component={RouterLink}
        to="/create-itinerary"
        style={{ marginBottom: '1rem' }}
      >
        Create New Itinerary
      </Button>
      <List>
        {itineraries.map((itinerary) => (
          <ListItem key={itinerary._id} button>
            <ListItemText primary={itinerary.title} secondary={itinerary.description} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default Dashboard;