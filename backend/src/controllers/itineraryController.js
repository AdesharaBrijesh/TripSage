const Itinerary = require('../models/Itinerary');

exports.createItinerary = async (req, res) => {
  try {
    const itinerary = new Itinerary({
      ...req.body,
      creator: req.userData.userId
    });
    await itinerary.save();
    res.status(201).json(itinerary);
  } catch (error) {
    res.status(500).json({ message: 'Error creating itinerary', error: error.message });
  }
};

exports.getItineraries = async (req, res) => {
  try {
    const itineraries = await Itinerary.find({ creator: req.userData.userId });
    res.json(itineraries);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching itineraries', error: error.message });
  }
};

exports.getItinerary = async (req, res) => {
  try {
    const itinerary = await Itinerary.findById(req.params.id);
    if (!itinerary) {
      return res.status(404).json({ message: 'Itinerary not found' });
    }
    res.json(itinerary);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching itinerary', error: error.message });
  }
};

exports.updateItinerary = async (req, res) => {
  try {
    const itinerary = await Itinerary.findOneAndUpdate(
      { _id: req.params.id, creator: req.userData.userId },
      req.body,
      { new: true, runValidators: true }
    );
    if (!itinerary) {
      return res.status(404).json({ message: 'Itinerary not found or unauthorized' });
    }
    res.json(itinerary);
  } catch (error) {
    res.status(500).json({ message: 'Error updating itinerary', error: error.message });
  }
};

exports.deleteItinerary = async (req, res) => {
  try {
    const itinerary = await Itinerary.findOneAndDelete({ _id: req.params.id, creator: req.userData.userId });
    if (!itinerary) {
      return res.status(404).json({ message: 'Itinerary not found or unauthorized' });
    }
    res.json({ message: 'Itinerary deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting itinerary', error: error.message });
  }
};