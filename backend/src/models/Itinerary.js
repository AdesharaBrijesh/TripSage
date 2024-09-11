const mongoose = require('mongoose');

const itinerarySchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  startDate: Date,
  endDate: Date,
  creator: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  collaborators: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  days: [{
    date: Date,
    activities: [{
      name: String,
      description: String,
      location: {
        type: { type: String, default: 'Point' },
        coordinates: [Number]
      },
      startTime: Date,
      endTime: Date,
      cost: Number
    }]
  }],
  isPublic: { type: Boolean, default: false },
  tags: [String],
  ratings: [{
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    rating: Number,
    review: String
  }],
  budget: {
    total: Number,
    expenses: [{
      category: String,
      amount: Number,
      date: Date,
      description: String
    }]
  }
}, { timestamps: true });

itinerarySchema.index({ title: 'text', description: 'text', 'days.activities.name': 'text' });

module.exports = mongoose.model('Itinerary', itinerarySchema);