// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/ridgeview', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Schema
const NewsSchema = new mongoose.Schema({
  title: String,
  date: String,
  summary: String,
  image: String,
});
const News = mongoose.model('News', NewsSchema);

// Route to get news
app.get('/api/news', async (req, res) => {
  try {
    const newsItems = await News.find().sort({ date: -1 });
    res.json(newsItems);
  } catch (err) {
    res.status(500).send('Server error');
  }
});

// Start server
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
