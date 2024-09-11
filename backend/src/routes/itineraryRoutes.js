const express = require('express');
const router = express.Router();
const itineraryController = require('../controllers/itineraryController');
const auth = require('../middleware/auth');

router.post('/', auth, itineraryController.createItinerary);
router.get('/', auth, itineraryController.getItineraries);
router.get('/:id', auth, itineraryController.getItinerary);
router.put('/:id', auth, itineraryController.updateItinerary);
router.delete('/:id', auth, itineraryController.deleteItinerary);

module.exports = router;