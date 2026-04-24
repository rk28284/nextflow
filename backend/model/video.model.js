const mongoose = require('mongoose');
const videoSchema = new mongoose.Schema({
title: { type: String, required: true },
  description: String,
  path: { type: String, required: true },
  status: { 
    type: String,  
  },
  createdAt: { type: Date, default: Date.now }

}, { timestamps: true });

module.exports = mongoose.model('Video', videoSchema);


